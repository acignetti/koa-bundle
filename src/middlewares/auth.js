const ACCESS_TOKEN_HEADER = "x-bundle-access-token";

const hasValidHeaders = (headers) => {
  let hasValidHeaders = false;
  if (ACCESS_TOKEN_HEADER in headers) {
    hasValidHeaders = headers[ACCESS_TOKEN_HEADER] == "token";
  }
  return hasValidHeaders;
};

export default async (ctx, next) => {
  if (!hasValidHeaders(ctx.request.headers)) {
    ctx.status = 403;
    return;
  }
  await next();
};
