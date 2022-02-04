import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="icon" href="./logo/logo-mini.png"
          type="image/x-icon"></link>
        <body className="bg-[#1C1C1E]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
