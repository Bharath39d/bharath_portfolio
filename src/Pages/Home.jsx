import { Box, Button, Center, Flex, Heading, HStack, Link, Tooltip, Image, Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoCloudDownload } from 'react-icons/go'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import { projects, skills } from '../Utils/data';

import ProjectCard from '../Components/Card';
import Svg1 from '../Components/Svg1';
import Svg2 from '../Components/Svg2';
import Svg3 from '../Components/Svg3';
import Slider from 'react-slick';
import Resume from '../Resume/Bharath_Devarasetty_Resume.pdf'




const Home = () => {

    const form = useRef();
    // const toast = useToast()
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: matchMedia("(max-width: 425px)").matches ? 1 : matchMedia("(max-width: 1024px)").matches ? 2 : 3,
        slidesToScroll: 1,
    };

    useEffect(() => {
        // * it's from Aos library to use scroll designing
        Aos.init()
    }, [])


    const isValidEmail = (value) => {
        // Basic email validation regex, you may need a more sophisticated one
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };



    //   const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SERVICE_TEMPLATE, form.current, process.env.REACT_APP_SERVICE_SECRET).then((result) => {

    //         toast({
    //             position: 'top-right',
    //             title: 'Email Sent ✔',
    //             description: `Thank You ${form.current.from_name.value.split(" ")[0]} for the message!`,
    //             status: 'success',
    //             duration: 5000,
    //             isClosable: true,
    //         })

    //         form.current.reset();
    //     }, 
    //     (error) => {
    //         console.log(error.text);
    //         toast({
    //             position: 'top-right',
    //             title: 'Email Not sent.',
    //             description: "There is some error",
    //             status: 'warning',
    //             duration: 5000,
    //             isClosable: true,
    //         })
    //     });;

    // };

    const sendEmail = (e) => {
        e.preventDefault(); 
        // Validation checks
    if (!fullName || !email || !message) {
        setErrorMessage('Please fill in all fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
  
      // Reset the confirmation message
      setShowConfirmation(false);
  
      // Show confirmation message if any of the fields are empty
      if (!fullName || !email || !message) {
        setShowConfirmation(true);
        return;
      }
  
      // Simulated email sending, replace this with your server-side logic
      const emailData = {
        to: 'bharathdevarasetty2@gmail.com',
        subject: 'New Message from Contact Form',
        body: `
          Full Name: ${fullName}
          Email: ${email}
          Message: ${message}
        `,
      };
  
      console.log('Simulating sending email:', emailData);
  
      // Reset the form fields after sending the email
      setFullName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
  
      // Show success message
      setShowSuccessMessage(true);
  
      // Hide success message after 3 seconds (adjust as needed)
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

     
               
    };
    
    // Style for the success message pop-up
    const successMessageStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <Box>
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%">
                    <Box data-aos="fade-down">
                        <Heading>Hey! <span className='themeText'>I'm</span></Heading>
                        <Box className='content'>
                            <Heading fontSize="2.3em" className='text' data-text="Bharath Devarasetty"><span className='themeText'>Bharath Devarasetty</span></Heading>
                        </Box>
                        <Text>A software Engineer passionate and experienced in building Web applications and specialized in CI/CD.</Text>
                        <HStack className='hireMe' onClick={() => { window.open("https://drive.google.com/file/d/1YYfJeGMAvMX-kmX_Ztz05qLIbyIMeNet/view", '_blank') }}>
                            <a href={Resume} download="Bharath_Devarasetty_Resume">
                                <Button>Resume <GoCloudDownload /></Button>
                            </a>
                        </HStack>
                    </Box>
                    <Box data-aos="fade-down">
                        <Svg1 />
                    </Box>
                </Flex>
            </Box>

            {/* About me */}

            <Box id="aboutMe">
                <Heading>About <span className='themeText'>me</span></Heading>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} alignItems="center" h="100%">
                    <div data-aos="fade-right">
                        <Svg3 />
                    </div>

                    <Flex data-aos="fade-left">
                        <Flex w="100%" gap="10%" justifyContent="center">
                            <Image
                                borderRadius='full'
                                boxSize='250px'
                                src='/portfolio-profile-pic.png'
                                alt='Bharath Devarsetty' />
                            <Svg3 />
                        </Flex>

                        <Box>
                            <Text>Motivated and results-driven professional with more than 2 years of hands-on experience as a Software Engineer. Passionate about creating captivating user interfaces while optimizing software development through efficient deployment and automation. Proficient in DevOps, SharePoint and React JS. Ensuring the seamless delivery of robust and business-aligned applications.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* Technical Skills section */}
            <Box id="skills">
                <Heading>
                    Technical
                    <span className="themeText"> Skills</span>
                </Heading>
                <Flex className='skills'>
                    <Flex>
                        <Heading size="lg">Web<span className='themeText'>Development</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "frontend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-up">
                                    <Box>
                                        <Image src={skill.icon} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Dev<span className='themeText'>Ops</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "devops").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-up">
                                    <Box>
                                        <Image src={skill.icon} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Clo<span className='themeText'>ud</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "cloud").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-down">
                                    <Box>
                                        <Image src={skill.icon} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Platforms <span className='themeText'>& Tools</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "platform").map(skill => <Box
                                    key={skill.id} className="skill"
                                    data-aos="zoom-in">
                                    <Box>
                                        <Image src={skill.icon} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                </Flex>
            </Box>


            {/* show projects */}
            <Box id="projects">
                <Heading textAlign="center">Featured <span className='themeText'>Projects</span></Heading>
                <Slider {...settings}>
                    {
                        projects.map((project, i) => <ProjectCard key={i} {...project} />)
                    }
                </Slider>
            </Box>


            {/* Github Statistics */}
            {/* <Box id="githubStats">
                <Heading textAlign="center">Github <span className='themeText'>stats</span></Heading>
                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Most used languages" />
                    <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=atanu8250&theme=radical" alt="Github Stats" />
                </Center>

                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api?username=Atanu8250&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical" alt="Github stats" />
                    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Current Streaks" />
                </Center>

                <Center>
                    <GitHubCalendar username="atanu8250" color="#4a8af4" children={<ReactTooltip html />} />
                </Center>
            </Box> */}


            {/* Contact me */}
            <Box id='contactMe'>
                <Heading textAlign="center">Contact <span className='themeText'>Me</span></Heading>
                <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">

                    <Box>
                        <Svg2 />
                    </Box>


                    <Box className='form-section'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputBox'>
                                {/* <input type="text" name="from_name" required /> */}
                                <input type="text"  value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                {/* <input type="email" name="from_mail" required /> */}
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <span>Email</span>
                            </div>
                            <div>
                                {/* <textarea placeholder='Message 📧' name="message" /> */}
                                <textarea value={message} placeholder='Message 📧' onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            <input type="submit" onClick={sendEmail} value="Send Message" />
                            {/* <input type="button" onClick={sendEmail}>  Send Message   </input> */}
                        </form>
                        {showConfirmation && (
                                        <p style={{ color: 'orange' }}>
                                        You missed entering some fields. Do you still want to send the message?
                                        </p>
                                    )}

                                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                                    {/* Success Message Pop-up */}
                                    {showSuccessMessage && (
                                        <div style={successMessageStyle}>
                                        <p>Message Sent!</p>
                                        </div>
                                    )}
      
                        <Flex className='contact-info'>
                            <HStack>
                                <SiGmail color="#e34133" />
                                <Text>bharathdevarasetty2@gmail.com</Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt color="#00a14f" />
                                <Text>+91 975577876</Text>
                            </HStack>
                        </Flex>
                        <Flex gap={["10px", "20px", "20px", "40px"]}>
                            <Link href='https://wa.me/919705577876' target="_blank">
                                <Tooltip label='+91 9705577876'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href='https://www.linkedin.com/in/bharath-d-2b0a66209' target="_blank">
                                <Tooltip label='Bharath Deavarsetty'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://github.com/bharath39d" target="_blank">
                                <Tooltip label='bharath39d'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="mailto:bharathdevarasetty2@gmail.com" target="_blank">
                                <Tooltip label='bharathdevarasetty2@gmail.com'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" />
                                        </Box>
                                    </Box >
                                </Tooltip>
                            </Link>
                        </Flex >
                    </Box >
                </Flex >
            </Box >

            {/* footer */}
            <Flex id='footer'>
                <Text>© Portfolio by Bharath D. | All rights reserved.</Text>
                <Text>Made with 💖 by Bharath</Text>
            </Flex>
        </Box >
    )
}

export default Home