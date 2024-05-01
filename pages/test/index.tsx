import { signIn } from 'next-auth/react'

const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
        const result = await signIn('credentials', {
            redirect: true,
            email,
            password,
            credentials: 'include',
            callbackUrl: '/test/loggedin',
            
        });
        console.log(result);
    } catch (error) {
        console.error('Login failed:', error);
    }
};

export default function Test() {
  return (
    <form
      onSubmit={handleSubmit} method='post'
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type='submit'>Sign In</button>
    </form>
  )
}
