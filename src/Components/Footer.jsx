import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../logo.png";
// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("#ea7c12")}
      rounded={"full"}
      color ='white'
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
     
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={'2'}
      width={"100%"}
      left={'0'}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Useful Links</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Our Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Corporate Governance</Link>
            <Link href={"#"}>HomeElementry In the News</Link>
            <Link href={"#"}>Find A Studio</Link>
            <Link href={"#"}>Gift Cards</Link>
            <Link href={"#"}>Brands</Link>
            <Link href={"#"}>Customer Reviews</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader> Partners</ListHeader>
            <Link href={"#"}>Sell With Us</Link>
            <Link href={"#"}>Become a Franchisee</Link>
            <Link href={"#"}>Become a Pep Homie</Link>
            <Link href={"#"}>Design For Us</Link>
            <Link href={"#"}>Login to Your Merchant Dashboard</Link>
            <Link href={"#"}>Important : GST and You</Link>
            <Link href={"#"}>Corporate Enquiries</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader> Need Help?</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Returns & Refund</Link>
            <Link href={"#"}>Track Your Order</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Buy on Phone</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Image
            src={logo}
            alt="logo"
            mx={"30px"}
            w={{ base: "100px", md: "180px" }}
          />
          <Text>© 2022 Home Elementry. All Rights Reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
