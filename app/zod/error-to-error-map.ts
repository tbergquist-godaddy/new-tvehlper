import { type ZodIssue } from 'zod';

function errorToErrorMap<T extends Record<keyof T, string>>(
  issues: ZodIssue[],
  state: T,
): { [K in keyof T]: string } {
  const errorMap: { [K in keyof T]: string } = {} as { [K in keyof T]: string };

  for (const issue of issues) {
    if (issue.path[0] in state) {
      const key = issue.path[0] as keyof T;
      errorMap[key] = issue.message;
    }
  }

  return errorMap;
}

export default errorToErrorMap;
