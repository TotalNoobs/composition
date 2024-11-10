from openai import OpenAI


# Function to interact with ChatGPT using the client
def chat_with_gpt(sentence, ItemInformation, client, fields_str):
    # Call the API through the client with your prompt and retrieve the response
    print("here0")
    response = client.beta.chat.completions.parse(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": f"Fill in the following fields: {fields_str} . If not mentioned of not mentioned leave blank"},
            {"role": "user", "content": sentence},
        ],
        response_format=ItemInformation,

    )
    print("here1")
    print(type(response.choices[0].message.parsed))
    # Extract and return the assistant's response
    return response.choices[0].message.parsed

# Function to interact with ChatGPT using the client
def get_image_info(base64_image, client, fields_str):
    # Call the API through the client with your prompt and retrieve the response
    print("here0")
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text",
                     #"text": "Describe the followig image in detail if mentioned in the image include in the description the following information: " + fields},
                     #"text": f"Put into words what is shown in the table of the image. Your description should include (if mentioned) {fields_str}. Please be very verbose. First a long text then (long) bullet points"},
                     "text": f"Translate and describe/summarize the information in the image. Your description should include (if mentioned) {fields_str}, among others"},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url":  f"data:image/jpeg;base64,{base64_image}"
                        },
                    }
                ]
            }
        ]
    )

    print("here1")
    print(response)
    print(type(response.choices[0].message.content))
    # Extract and return the assistant's response
    return response.choices[0].message.content