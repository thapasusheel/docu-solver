from fastapi import APIRouter, File, UploadFile, HTTPException
from services.llm_service import ingest_and_index_files
import os

router = APIRouter()

UPLOAD_DIRECTORY = "./uploaded_files"
os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)


@router.post("/upload-files")
async def upload_files(file: UploadFile = File(...)):

    file_extension = file.filename.split('.')[-1].lower()

    # Implement extra mime check here for better security
    if file_extension not in ["pdf"]:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Generate a secure hard-to-guess filename
    secure_filename = f"{uuid.uuid4()}.{file_extension}"
    file_location = os.path.join(UPLOAD_DIRECTORY, secure_filename)

    # DO not allow writing to other paths.
    if not pathlib.Path(file_location).resolve().parent == pathlib.Path(UPLOAD_DIRECTORY).resolve():
        raise HTTPException(status_code=400, detail="Invalid file path")

    with open(file_location, "wb") as f:
        f.write(file.file.read())

    return {"info": f"file '{secure_filename}' saved at '{file_location}'"}
