from common.imageprocessing import reduceResolution, encode_image
from pydantic import BaseModel, create_model
from openai import OpenAI
import json
import base64
from common.chatgptapi import get_image_info, chat_with_gpt
from django.conf import settings
import os


fields = ["equipment_name", "equipment_category", "manufacturer", "model", "serial_number", "equipment_type", "size_of_device", "year_of_production"]



def process_image(image_path):
    field_types = [(str,...) for i in range(len(fields))]

    if settings.CHATGPT_API_KEY is None or settings.CHATGPT_API_KEY == "":
        raise ValueError("Please set the CHATGPT_API_KEY environment variable.")
    client = OpenAI(
        api_key=settings.CHATGPT_API_KEY,
    )
    low_resolution_path = reduceResolution(image_path)
    base64_image = encode_image(low_resolution_path)
    os.remove(low_resolution_path)


    fields_dic = {f: s for f, s in zip(fields, field_types)}
    ItemInformation = create_model('ItemInformation', **fields_dic, __base__=BaseModel)

    response = get_image_info(base64_image, client, ", ".join(fields))
    # print(response)
    response = chat_with_gpt(response, ItemInformation, client, ", ".join(fields))
    # print(response)

    return response.model_dump()

    # return response.dict()
    # Write the response to a JSON file
    # with open('response.json', 'w') as json_file:
    #     json.dump(response_dict, json_file, indent=4)

# image_path = "Pictures/20211111_090406.jpg"
# image_path = "Pictures/20220517_111740.jpg"
# image_path = "Pictures/20220630_113121.jpg"
# image_path = "Pictures/20230526_100013_002.jpg"
# #image_path = "Pictures/20220630_131358.jpg"
# #image_path = "Pictures/20230118_121551.jpg"

# field_types = [(str, ...), (str, ...), (str, ...), (str, ...), (str, ...), (str, ...), (str, ...), (str, ...)]

# get_json(image_path, fields, field_types)
# def aiapi_get(image_path):

#     get_json(image_path, fields, field_types)