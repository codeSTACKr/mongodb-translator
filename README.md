<h1 align="center">MongoDB Translator<br>(MongoDB Queries to Natural Language and Natural Language to MongoDB Queries)</h1>

Welcome to the MongoDB Query API and Natural Language Translator! This tool is designed to make it easy for anyone to translate MongoDB Queries into natural language and vice versa.

## 🌟 Features

- Dark mode
- Copy to clipboard
- MongoDB Query API syntax highlighting
- Schema awareness
- Query history

## 📖 How to use:

Using the MongoDB Query API to Natural Language Translator is easy. Simply navigate to the tool's website and choose whether you want to translate from natural language to MongoDB Query API or from MongoDB Query API to natural language. Then, type in your query and hit the "translate" button. The tool will generate the corresponding code or text and display it on the screen.
You can press the 'reverse' button to give input as Natural Language and get MongoDB Query API queries in response.

## 🎯 Roadmap

- [ ] ❓

## 🛠️ Installation

### Local Development Environment

1. Clone the repository:

   ```bash
   git clone https://github.com/codeSTACKr/mongodb-translator.git
   ```

2. Install the required packages:

   ```bash
   cd mongodb-translator
   npm install
   ```

3. Build the application:

   ```bash
   npm run build
   ```

4. Input your OPENAI API key in the .env file, you can get your API key [here](https://beta.openai.com/account/api-keys):

   ```bash
   OPENAI_API_KEY=$YOUR_API_KEY
   ```

5. Start the development server:

   ```bash
   npm start
   ```

### Docker Compose

1. Clone the repository:

   ```bash
   git clone https://github.com/codeSTACKr/mongodb-translator.git
   ```

2. Input your OPENAI API key in the .env.production file, you can get your API key [here](https://beta.openai.com/account/api-keys):

   ```bash
   OPENAI_API_KEY=$YOUR_API_KEY
   ```

3. Start the development server:

   ```bash
   docker-compose up
   ```

## 🖥️ Usage

Once the development server is running, you can access the application by navigating to `http://localhost:3000` in your web browser.

Enter a natural language query in the input box and click "Translate" to generate the corresponding MongoDB Query API code. The generated MongoDB Query API code will be displayed in the output box.

## 👥 Contributing

Contributions to MongoDB Translator are welcome and encouraged! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Push your changes to your fork
5. Submit a pull request

## 📜 License

MongoDB Translator is released under the MIT [License](LICENSE).
