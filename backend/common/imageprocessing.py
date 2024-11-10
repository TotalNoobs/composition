from PIL import Image
import os
import base64
import tempfile

def reduceResolution(image_path):
    # Open the original image
    img = Image.open(image_path, formats=['JPEG', 'PNG'])
    print( os.path.getsize(image_path) )

    # Define the new size (for example, reduce by half)
    new_width = img.width // 4
    new_height = img.height // 4

    # Resize the image
    resized_img = img.resize((new_width, new_height), Image.LANCZOS)
    resized_img = resized_img.convert('RGB')

    # Save or display the reduced resolution image
    # new_path = 'low.jpg'
    new_path = None
    with tempfile.NamedTemporaryFile(delete_on_close=False) as fp:
      fp.close()
      new_path = fp.name + '.jpg'

    resized_img.save(new_path)
    print( os.path.getsize(new_path) )
    return new_path

def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')