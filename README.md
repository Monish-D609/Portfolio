<div align="center">

  <br />

  <h1>🌐 Monish D — AI-Native Portfolio 🤖✨</h1>
</div>

---

### **About The Project** 💡

This is an **AI-powered, interactive portfolio** that transforms the traditional "About Me" page into a dynamic, engaging conversation. Instead of forcing visitors to scroll endlessly through information, it invites them to ask questions and receive answers tailored specifically to them.

Built with cutting-edge AI and modern web technologies, this portfolio doesn't just show — it communicates.

---

### **Features** ✨

*   **🗣️ Interactive AI Avatar:** Engage in real-time conversation. Ask anything from my tech stack to my hobbies and get instant, context-aware answers.
*   **🧠 Context-Aware Engine:** The AI's personality and responses adapt based on who it's talking to — whether you're a recruiter, a fellow developer, or a friend.
*   **🎨 Dynamic & Responsive UI:** A sleek, modern interface built with TailwindCSS and brought to life with Framer Motion animations.
*   **🎵 Spotify Integration:** Live "Now Playing" widget showing what I'm currently listening to.
*   **🚀 Built for Everyone:** Crafted to provide a unique experience for tech recruiters, potential collaborators, and curious friends alike.
*   **💬 No More Boring Bios:** This portfolio talks *back*.

---

### **Tech Stack** 🛠️

| **Category**      | **Technology**                                                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Frontend**      | [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) |
| **Backend**       | [Node.js](https://nodejs.org/), Next.js API Routes                                                                     |
| **AI & APIs**     | [Cloudflare Workers AI](https://ai.cloudflare.com/), [OpenRouter](https://openrouter.ai/), [Google Gemini](https://ai.google.dev/), [GitHub API](https://docs.github.com/en/rest), [Spotify API](https://developer.spotify.com/) |
| **Deployment**    | [Vercel](https://vercel.com/)                                                                                         |
| **Package Manager**| [pnpm](https://pnpm.io/)                                                                                              |

---

### **Installation & Usage** 🚀

Want to get this project running on your local machine? Follow these simple steps.

#### **Prerequisites**
-   Node.js (v18 or higher)
-   pnpm package manager
-   Cloudflare API Token (primary AI provider)
-   GitHub API Token

#### **Local Setup**

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Monish-D609/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

3.  **Set up your environment variables:**
    Create a `.env.local` file in the root of your project and add the following keys:
    ```env
    GITHUB_TOKEN="your_github_token_here"
    SPOTIFY_CLIENT_ID="your_spotify_client_id"
    SPOTIFY_CLIENT_SECRET="your_spotify_client_secret"
    SPOTIFY_REFRESH_TOKEN="your_spotify_refresh_token"

    # AI Providers
    CF_ACCOUNT_ID="your_cloudflare_account_id"
    CF_API_TOKEN="your_cloudflare_api_token"
    # CF_MODEL="@cf/meta/llama-3.3-70b-instruct-fp8-fast"

    OPENROUTER_API_KEY="your_openrouter_api_key"
    # OPENROUTER_MODEL="meta-llama/llama-3.3-70b-instruct"

    GOOGLE_GENERATIVE_AI_API_KEY="your_google_gemini_api_key"
    # GOOGLE_MODEL="gemini-2.0-flash"
    ```
    *   Get your Cloudflare API Token from [dash.cloudflare.com](https://dash.cloudflare.com/) — **primary AI provider**.
    *   Get your OpenRouter API Key from [openrouter.ai](https://openrouter.ai/) — **fallback provider 1**.
    *   Get your Google Gemini API Key from [aistudio.google.com](https://aistudio.google.com/) — **fallback provider 2**.
    *   Generate your GitHub Token at [github.com/settings/tokens](https://github.com/settings/personal-access-tokens).

    **AI provider order:** Cloudflare Workers AI → OpenRouter → Google Gemini. The fallback is transparent to visitors.

4.  **Run the development server:**
    ```sh
    pnpm dev
    ```

5.  **Open your browser** and navigate to `http://localhost:3000`.

---

### **License** 📄

This project is open-sourced under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

### **Contact & Links** 🔗

**Monish D** — Let's connect!

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/monish-d-b743a3258/)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Monish-D609)

</div>

---

### **Tags**

`#AIPortfolio` `#NextJS` `#React` `#Portfolio` `#Vercel` `#CloudflareAI` `#OpenRouter` `#GoogleGemini` `#DeveloperPortfolio` `#WebDevelopment` `#InteractiveUI`
