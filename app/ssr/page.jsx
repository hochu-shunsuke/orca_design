import React from 'react';
import { auth0 } from '../../lib/auth0';

export default async function SSRPage() {
  const { user } = await auth0.getSession();
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Server-side Rendered Page</h1>
        <div data-testid="ssr-text">
          <p>
            You can protect a server-side rendered page by wrapping it with <code>withPageAuthRequired</code>. Only
            logged in users will be able to access it. If the user is logged out, they will be redirected to the login
            page instead.{' '}
          </p>
        </div>
      </div>
      <div className="result-block-container" data-testid="ssr-json">
        <div className="result-block">
          <h6 className="muted">User</h6>
          <pre className="bg-gray-100 p-4 rounded">
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
        </div>
      </div>
    </>
  );
};
