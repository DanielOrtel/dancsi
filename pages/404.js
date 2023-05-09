import React from 'react';
import ErrorContent from 'content/error';

export default function Page404({ statusCode }) {
  return <ErrorContent statusCode={statusCode} />;
}
