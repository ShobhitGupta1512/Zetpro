// EmailJS Configuration
// Replace these placeholder values with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your Email Service ID (from EmailJS dashboard → Email Services)
  SERVICE_ID: 'service_your_service_id',

  // Your Contact Form Template ID (from EmailJS dashboard → Email Templates)
  TEMPLATE_ID: 'template_contact_form',

  // Your Public Key (from EmailJS dashboard → Account → General)
  PUBLIC_KEY: 'your_public_key_here',

  // Newsletter Template ID (create a separate template for newsletter subscriptions)
  NEWSLETTER_TEMPLATE_ID: 'template_newsletter'
};

// Template Variables Available:
// For Contact Form:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_name}} - Your business name

// For Newsletter:
// {{subscriber_email}} - Subscriber's email
// {{subscription_type}} - Type of subscription
// {{to_name}} - Your business name