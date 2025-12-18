# Email Functionality Setup Guide

## Setting up EmailJS for Contact Form

Your contact form is now ready to send emails! Follow these steps to configure it:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Connect your email account and give it a name

### 3. Create Email Templates
You'll need TWO templates:

**Contact Form Template:**
1. Go to "Email Templates" → "Create New Template"
2. Name it something like "contact_form"

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
Hello {{to_name}},

You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Website Contact Form
```

**Newsletter Subscription Template:**
1. Create another template named "newsletter_template"

**Subject:**
```
New Newsletter Subscription
```

**Body:**
```
Hello {{to_name}},

Someone has subscribed to your newsletter!

Subscriber Email: {{subscriber_email}}
Subscription Type: {{subscription_type}}

Welcome your new subscriber!

Best regards,
Your Website Newsletter System
```

4. Save the template

### 4. Get Your Configuration Keys
1. From "Email Services", copy your **Service ID**
2. From "Email Templates", copy your **Template ID**
3. Go to "Account" → "General" and copy your **Public Key**

### 5. Configure Your App
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual keys:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id',
  PUBLIC_KEY: 'your_actual_public_key'
};
```

### 6. Test the Contact Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **Emails not sending**: Check your browser console for errors and verify your EmailJS keys
- **Template variables not working**: Make sure the variable names in your template match exactly (case-sensitive)
- **Service quota exceeded**: EmailJS free plan has limits - upgrade if needed

## Security Note
The public key is safe to use in frontend code, but never expose your private keys or service credentials.