import email_service
import os
import resend
from EmailRequest import EmailRequest
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

resend.api_key = os.getenv("RESEND_API_KEY")

@app.post("/send-email")
def send_email(request: EmailRequest):
    email_service.send_email(request)

    return True
