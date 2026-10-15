export const verifySmtpConfiguration = async () => {
  console.log('SMTP Configuration Check Placeholder');
  return { ready: false, user: 'placeholder', error: 'SMTP not configured' };
};

export const sendVerificationEmail = async ({ to, name, code }: { to: string; name?: string; code: string }) => {
  console.log(`Sending verification code to ${to}: ${code}`);
  return { success: true, message: 'Code sent', delivered: true, smtpConfigured: false, code };
};
