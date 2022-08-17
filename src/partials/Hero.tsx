import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Buenas a todos, soy <GradientText>Javi Llinares</GradientText> 👋
        </>
      }
      description={
        <>
          Desarrollador Junior especializándose en el stack PERNN y siempre{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            con ganas
          </a>{' '}
          de mejorar y estar actualizado en el sector.{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Eterno aprendiz
          </a>{', '}
          sino se algo haré todo lo posible por aprender y mejorar. Busco crear una aplicación que ayude a las personas.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="assets\images\avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/llina_gz">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/javierllinaresbarral/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/llinagz">
            <HeroSocial
              src="/src/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
