import resend
import os

from backend.EmailRequest import EmailRequest

resend.api_key = os.getenv("RESEND_API_KEY")

def send_email(request: EmailRequest):
  params = {
    "from": "onboarding@resend.dev",
    "to": "arthurva@uw.edu",
    "reply_to": request.email,
    "subject": f"Contact form message from {request.name}",
    "text": (
      f"Name: {request.name}\n"
      f"Email: {request.email}\n\n"
      f"{request.message}"
    ),
  }

  resend.Emails.send(params)