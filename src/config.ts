export const siteConfig = {
  name: "João Boscarino",
  title: "Web Developer",
  description: "Portfólio pessoal mostrando meus projetos e habilidades em desenvolvimento web",
  accentColor: "#ffffffff", // cor azul padrão, você pode alterar
  social: {
    email: "joaoboscarino434@gmail.com",
    linkedin: "https://www.linkedin.com/in/joaoboscarino",
    github: "https://github.com/JoaoBoscarino",
  },
 aboutMe:
  "Olá! Sou João, um desenvolvedor web apaixonado por criar projetos modernos e funcionais. Tenho experiência com desenvolvimento front-end e back-end, sempre buscando aprender novas tecnologias e melhorar minhas habilidades. Gosto de desenvolver aplicações web responsivas e sistemas integrados.",
skills: ["HTML", "CSS", "Javascript", "PHP", "Tailwind", "Git", "Github"],


  projects: [
    {
      name: "Nexify Store",
      description:
        "Loja virtual totalmente interativa, desenvolvida com HTML, CSS e JavaScript. (Em desenvolvimento)",
      link: "https://github.com/JoaoBoscarino/Nexify-Store",
      skills: ["HTML", "CSS", "Javascript"]
    }

  ],
  experience: [
    {
      company: "Projetos Pessoais e Acadêmicos",
      title: "Desenvolvedor Web",
      dateRange: "2025 - Presente",
      bullets: [
        "Criação de sistemas web completos usando HTML, CSS e Javascript",
        "Implementação de layouts responsivos e modernos"
      ]
    }

  ],

  education: [
    {
      school: "ETERJ",
      degree: "Ensino Médio Técnico em Informática",
      dateRange: "2022 - 2024",
      achievements: [
        "Participação em projetos de tecnologia da escola"
      ]
    }

  ]
};

export const skillIconsMap: Record<string, string> = {
  "HTML": "html",
  "CSS": "css",
  "Tailwind": "tailwind",
  "Javascript": "js",
  "PHP": "php",
  "Git": "git",
  "Github": "github",
};
