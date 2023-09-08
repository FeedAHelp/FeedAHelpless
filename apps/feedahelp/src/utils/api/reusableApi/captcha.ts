export const captchaValidation = async (token: string): Promise<number> => {
  const captchaResponse = await fetch("/api/captcha/verifyCaptcha", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gRecaptchaToken: token,
    }),
  });

  return captchaResponse.status;
};
