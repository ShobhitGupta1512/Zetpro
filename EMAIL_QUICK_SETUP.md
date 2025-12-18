# EmailJS Quick Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your EmailJS Credentials
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up/Login to your account
3. Follow these steps:

### Step 2: Add Email Service
- Click "Email Services" → "Add New Service"
- Choose your email provider (Gmail recommended)
- Connect your email account
- **Copy the Service ID** (looks like: `service_xxxxxx`)

### Step 3: Create Contact Form Template
- Click "Email Templates" → "Create New Template"
- Name: `contact_form`
- **Subject:** `New Contact Message from {{from_name}}`
- **Body:**
```
Hello,

New contact form message received:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Zaptro Contact System
```
- **Save and copy the Template ID** (looks like: `template_xxxxxx`)

### Step 4: Create Newsletter Template
- Create another template named `newsletter`
- **Subject:** `New Newsletter Subscription`
- **Body:**
```
Hello,

New newsletter subscription:

Email: {{subscriber_email}}
Type: {{subscription_type}}

Welcome your new subscriber!

Best regards,
Zaptro Newsletter System
```
- **Save and copy the Template ID**

### Step 5: Get Public Key
- Go to "Account" → "General"
- **Copy your Public Key** (looks like: `xxxxxxxxxxxxxx`)

### Step 6: Update Configuration
Edit `src/config/emailjs.js` and replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id',
  TEMPLATE_ID: 'template_your_contact_template_id',
  PUBLIC_KEY: 'your_actual_public_key',
  NEWSLETTER_TEMPLATE_ID: 'template_your_newsletter_template_id'
};
```

### Step 7: Test
1. Start your app: `npm run dev`
2. Go to Contact page and send a test message
3. Check your email for the message
4. Test newsletter subscription in footer

## ✅ You're Done!

Your contact form and newsletter will now send real emails!

## 🔧 Troubleshooting

- **"Invalid service ID"**: Double-check your Service ID in emailjs.js
- **"Template not found"**: Verify Template IDs match exactly
- **Emails not arriving**: Check spam folder, verify email service connection
- **Quota exceeded**: EmailJS free plan allows 200 emails/month

## 📧 Template Variables Reference

**Contact Form Template:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your business name

**Newsletter Template:**
- `{{subscriber_email}}` - Subscriber's email
- `{{subscription_type}}` - Subscription type
- `{{to_name}}` - Your business name