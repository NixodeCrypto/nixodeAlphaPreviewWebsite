import BrandLogo from '@/components/BrandLogo';
import Flex from '@/components/Flex';
import Body from '@/components/Body';
import Link from '@/components/Link';

const Footer = () => {
  const socials = [
    ['Instagram', '/'],
    ['Facebook', '/'],
    ['Twitter', '/'],
    ['Linkedin', '/'],
  ];

  const companyLinks = [
    ['Home', '/'],
    ['Prices', '/prices'],
    ['Blog', '/blog'],
    ['Login', '/login'],
    ['Signup', '/signup'],
  ];

  const legalLinks = [
    ['User Agreement', '/useragreement'],
    ['Terms of Service', '/tos'],
  ];

  const sectionGen = (title: string, links: Array<Array<string>>) => (
    <Flex verticalGap="xs" flexDirection="column" mb="md" mr={{ sm: 'xl' }}>
      <Body fontWeight="bold" color="blueGrey.900">
        {title}
      </Body>
      {links.map((i) => (
        <Link href={i[1]} key={i[1]}>
          <Body fontWeight="regular" color="grey.900">
            {i[0]}
          </Body>
        </Link>
      ))}
    </Flex>
  );

  return (
    <footer>
      <Flex
        py="md"
        pl={{ xss: 'sm', sm: 'lg' }}
        fontFamily="text"
        flexDirection="column"
      >
        <BrandLogo />
        <Flex flexDirection="column">
          <Body color="grey.700" mb="md">
            &copy; {new Date().getFullYear()} Nixode
          </Body>
        </Flex>
        <Flex flexDirection={{ xss: 'column', sm: 'row' }}>
          {sectionGen('Social Media', socials)}
          {sectionGen('Company', companyLinks)}
          {sectionGen('Legals', legalLinks)}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
