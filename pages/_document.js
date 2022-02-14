import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {  
  render() {
    return (
      <Html>
        <Head />
        <body className='font-jetBrains'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument