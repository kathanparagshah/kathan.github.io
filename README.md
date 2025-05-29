# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean, professional design optimized for performance and SEO.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Static site generation for lightning-fast loading
- **SEO Ready**: Meta tags, sitemap, robots.txt, and semantic HTML
- **Interactive Elements**: Smooth scrolling, project filtering, contact form
- **Professional Sections**: Hero, About, Skills, Experience, Projects, Contact
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: React Icons (Feather Icons, Simple Icons)
- **Deployment**: Optimized for Vercel/Netlify
- **Code Quality**: ESLint + Prettier configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Static Export (Recommended)
```bash
npm run export
```
This creates an `out` folder with static files ready for deployment.

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify Deployment
1. Build command: `npm run export`
2. Publish directory: `out`
3. Deploy from your Git repository

## 📝 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`components/Hero.tsx`)
   - Name and title
   - Value proposition
   - Resume link

2. **About Section** (`components/About.tsx`)
   - Background story
   - Career goals
   - Personal highlights

3. **Skills Section** (`components/Skills.tsx`)
   - Technical skills with proficiency levels
   - Skill categories
   - Additional technologies

4. **Experience Section** (`components/Experience.tsx`)
   - Work experience
   - Education details
   - Achievements

5. **Projects Section** (`components/Projects.tsx`)
   - Project details
   - Technologies used
   - Live demo and GitHub links

6. **Contact Section** (`components/Contact.tsx`)
   - Contact information
   - Social media links

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color scheme
- **Fonts**: Update Google Fonts import in `styles/globals.css`
- **Components**: Customize component styles in `styles/globals.css`

### SEO & Meta Tags
Update meta information in:
- `pages/_document.tsx` - Global meta tags
- `components/Layout.tsx` - Page-specific meta tags
- `public/sitemap.xml` - Update with your domain
- `public/robots.txt` - Update with your domain

## 📁 Project Structure

```
├── components/          # React components
│   ├── Layout.tsx      # Main layout with navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience & education
│   ├── Projects.tsx    # Projects showcase
│   └── Contact.tsx     # Contact form & info
├── pages/              # Next.js pages
│   ├── _app.tsx        # App component
│   ├── _document.tsx   # Document component
│   └── index.tsx       # Home page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS + custom styles
├── public/             # Static assets
│   ├── robots.txt      # SEO robots file
│   ├── sitemap.xml     # SEO sitemap
│   └── resume.pdf      # Resume file (add your own)
└── README.md           # This file
```

## 🎨 Design Features

- **Minimal Design**: Clean, white-space-driven layout
- **Professional Typography**: Inter font family for readability
- **Consistent Spacing**: Systematic spacing using Tailwind utilities
- **Hover Effects**: Subtle interactions for better UX
- **Mobile Responsive**: Hamburger menu and responsive grid
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Loading States**: Interactive feedback for form submissions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Type safety and better developer experience

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Excellent performance metrics
- **Image Optimization**: Next.js Image component (when using images)
- **Bundle Size**: Minimal dependencies for fast loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the website, feel free to reach out!

---

**Built with ❤️ using Next.js and Tailwind CSS**