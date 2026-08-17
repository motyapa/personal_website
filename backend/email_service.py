import resend
from EmailRequest import EmailRequest

def send_email(request: EmailRequest):
  params = {
    "from": "email@arthurvartanyan.com",
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