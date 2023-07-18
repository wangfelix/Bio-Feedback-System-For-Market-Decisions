import React from "react";
import { useDispatch } from "react-redux";
import Lottie from "react-lottie";

import { Button } from "Components/Button/button";
import { LandingPageSection } from "Pages/LandingPage/Components/landingPageSection";
import ArtificialIntelligence from "Illustrations/artificial-intelligence.jpg";
import { BORDER_RADIUS, Colors } from "Utils/globalStyles";
import { useIsLoggedIn } from "Utils/hooks";
import { Row } from "Components/row";
import { setRegistrationModalOpen } from "State/Actions/actionCreators";
import { Container } from "Components/container";
import { Text } from "Components/text";
import DownArrows from "Illustrations/Lotties/DownArrows.json";
import { LandingSection, LandingSectionProps } from "Pages/LandingPage/Components/landingSection";
import MLServer from "Illustrations/landing-page-ml-server.png";
import ScientistNodes from "Illustrations/scientist_nodes.png";
import Ethereum from "Illustrations/ethereum_illustration.png";
import PeopleTalking from "Illustrations/people_talking_on_pie_chart.png";
import HeroImage from "Illustrations/hero-image.jpg";
import { PageLayout } from "Components/pageLayout";

export const LandingPage = () => {
    const dispatch = useDispatch();

    // -- STATE --

    const isLoggedIn = useIsLoggedIn();

    // -- STYLES --

    const imageStyle = {
        width: "55%",
        objectFit: "cover" as "cover",
    };

    // -- CONST DATA --

    const newLandingSections: LandingSectionProps[] = [
        {
            title: "Bio Feedback in Stock Market Decision Situations",
            content: (
                <>
                    <Text>
                        Biofeedback has emerged as a fascinating tool in decision-making within stock markets. By
                        monitoring physiological responses like heart rate and skin conductance, traders can gain
                        insights into their emotional states during crucial moments. This real-time feedback helps them
                        identify moments of stress, fear, or overconfidence, enabling more mindful decision-making.
                        Understanding one's physiological reactions can prevent impulsive actions driven by emotions,
                        leading to more rational choices. Biofeedback empowers traders to harness their biological
                        signals, ensuring a calmer and more strategic approach to navigating the dynamic world of stock
                        markets.
                    </Text>

                    <img style={imageStyle} src={ArtificialIntelligence} alt="artificial intelligence" />
                </>
            ),
        },
        {
            title: "About this Project",
            backgroundColor: "dark",
            content: (
                <Text>
                    This project is the result of the seminar project "Positive Information Systems". The aim of this
                    project is to develop a biofeedback system tailored specifically for stock market traders,
                    leveraging the power of physiological responses to enhance decision-making processes. By integrating
                    biofeedback sensors to monitor key physiological indicators such as heart rate, skin conductance,
                    the system will provide real-time data on traders' emotional states during critical market moments.
                    Through data analysis and visualization techniques, the system will enable traders to gain deeper
                    insights into their emotional reactions and make more informed decisions. The project will also
                    focus on designing user-friendly interfaces and feedback mechanisms to effectively communicate the
                    biofeedback data to the traders. The ultimate goal is to empower traders with a comprehensive tool
                    that promotes self-awareness, mindfulness, and rational decision-making in the dynamic and
                    high-pressure environment of the stock market.
                </Text>
            ),
        },
        {
            title: "What does this Application offer?",
            content: (
                <Container>
                    <Row
                        styleProps={{
                            alignItems: "center",
                            padding: "0 150px",
                            borderBottom: `solid 3px ${Colors.PRIMARY_ACCENT_HUE_DARKER}`,
                        }}
                    >
                        <img
                            src={Ethereum}
                            alt="Server"
                            style={{ width: 350, objectFit: "cover" as "cover", paddingTop: 30, paddingBottom: 10 }}
                        />

                        <h3
                            style={{
                                fontSize: 30,
                                lineHeight: 1.2,
                                fontWeight: "500",
                                color: "#7c5cd9",
                                marginRight: 60,
                                width: 205,
                                flexShrink: 0,
                            }}
                        >
                            Session Tracking and Analysis
                        </h3>

                        <Text>
                            This Bio Feedback System offers session tracking. Each session consists of data from eda or
                            ecg sensors, as well as an experiment. Users can revisit their previously executed
                            experiments, and see valuable information regarding their decisions in the financial
                            experiment and theri bdily state, somatic responses during that.
                        </Text>
                    </Row>

                    <Row
                        styleProps={{
                            alignItems: "center",
                            padding: "0 150px",
                            borderBottom: `solid 3px ${Colors.PRIMARY_ACCENT_HUE_DARKER}`,
                        }}
                    >
                        <Text styleProps={{ marginRight: 60 }}>
                            This Bio Feedback System offers session tracking. Each session consists of data from eda or
                            ecg sensors, as well as an experiment. Users can revisit their previously executed
                            experiments, and see valuable information regarding their decisions in the financial
                            experiment and theri bdily state, somatic responses during that.
                        </Text>

                        <h3
                            style={{
                                fontSize: 30,
                                lineHeight: 1.2,
                                fontWeight: "500",
                                color: "#58bdc7",
                                width: 205,
                                flexShrink: 0,
                            }}
                        >
                            Session Tracking and Analysis
                        </h3>

                        <img src={ScientistNodes} alt="Server" style={{ width: 350, objectFit: "cover" as "cover" }} />
                    </Row>

                    <Row
                        styleProps={{
                            alignItems: "center",
                            padding: "0 150px",
                            borderBottom: `solid 3px ${Colors.PRIMARY_ACCENT_HUE_DARKER}`,
                        }}
                    >
                        <img src={MLServer} alt="Server" style={{ width: 350, objectFit: "cover" as "cover" }} />

                        <h3
                            style={{
                                fontSize: 30,
                                lineHeight: 1.2,
                                fontWeight: "500",
                                color: "#5a73bc",
                                marginRight: 60,
                                width: 205,
                                flexShrink: 0,
                            }}
                        >
                            Server Client Architecture
                        </h3>

                        <Text>
                            This Bio Feedback System is build using a server client architecture. The backend service is
                            built using node.js and express.js, which connects to a mongoDB database. The database
                            stores all the user data and session data, which is served via a REST API to the frontend
                            service, which is build using React.js, Webpack, Redux and more.
                        </Text>
                    </Row>

                    <Row
                        styleProps={{
                            alignItems: "center",
                            padding: "0 150px",
                            borderBottom: `solid 3px ${Colors.PRIMARY_ACCENT_HUE_DARKER}`,
                        }}
                    >
                        <Text styleProps={{ marginRight: 60 }}>
                            This Bio Feedback System is a tool that can be used in future research aplications.
                            Integration custom designed financial experiments(such as experiments in the K2DLabs) can
                            show researchers valuable insights in the somatosensory reactions of particpants performing
                            tier studies. A comparison bwtween a group using life feedback systems with alerting signals
                            durign experiments against a control group can also deliver insights in the impact and
                            effects of emotions and decision making.
                        </Text>

                        <h3
                            style={{
                                fontSize: 30,
                                lineHeight: 1.2,
                                fontWeight: "500",
                                color: "rgb(104,178,255)",
                                width: 205,
                                flexShrink: 0,
                            }}
                        >
                            Valuable Insights for future Research
                        </h3>

                        <img
                            src={PeopleTalking}
                            alt="Server"
                            style={{ width: 350, objectFit: "cover" as "cover", paddingTop: 30, paddingBottom: 10 }}
                        />
                    </Row>
                </Container>
            ),
        },
    ];

    // -- CALLBACKS --

    const openRegistrationModal = () => dispatch(setRegistrationModalOpen(true));

    const handleGoToDemoPage = () => {};

    // -- RENDER --

    const lottieOptions = {
        downArrowOptions: {
            animationData: DownArrows,
            loop: true,
            autoplay: true,
        },
    };

    return (
        <PageLayout layout="landing">
            <Row styleProps={{ background: Colors.BLUE_DARKEST, position: "relative", height: "80vh" }}>
                <Container
                    styleProps={{
                        width: "100%",
                        height: "100%",
                        padding: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                    }}
                >
                    <Container styleProps={{ marginBottom: "40px", justifyContent: "center", alignItems: "center" }}>
                        <h1
                            style={{
                                fontSize: "50px",
                                color: Colors.WHITE_OFF_WHITE,
                                letterSpacing: "8px",
                                marginRight: "-8px", // Removes letter-spacing from the last letter.
                                marginBottom: 40,
                            }}
                        >
                            Bio Feedback System
                        </h1>

                        <h3 style={{ color: Colors.GREY, textAlign: "center" }}>
                            Tracking and Analysis Software for EDA and ECG Tracking Data
                            <br />
                            <br />
                            in High Risk Decision Situations in Stock Markets
                        </h3>
                    </Container>

                    <Container
                        styleProps={{
                            width: 60,
                            height: 5,
                            background: Colors.GREEN_ACCENT,
                            marginBottom: 40,
                            borderRadius: BORDER_RADIUS,
                        }}
                    />

                    <Row styleProps={{ width: "100%", justifyContent: "center", gap: "20px" }}>
                        {!isLoggedIn && (
                            <Button
                                buttonType="primary"
                                styleProps={{ width: "200px" }}
                                onClickHandle={openRegistrationModal}
                            >
                                Get Started
                            </Button>
                        )}
                        <Button
                            buttonType={"secondary"}
                            styleProps={{ width: "200px" }}
                            onClickHandle={handleGoToDemoPage}
                        >
                            Learn More
                        </Button>
                    </Row>
                </Container>

                <img src={HeroImage} alt="Hero Bild" style={{ maxWidth: "100vw", objectFit: "cover" }} />
            </Row>

            <LandingPageSection color="secondary" styleProps={{ height: "auto", padding: 30 }}>
                <Row styleProps={{ justifyContent: "center", alignItems: "center" }}>
                    <Lottie
                        options={lottieOptions.downArrowOptions}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        isClickToPauseDisabled
                    />
                </Row>
            </LandingPageSection>

            {newLandingSections.map((section) => (
                <LandingSection
                    title={section.title}
                    content={section.content ?? undefined}
                    contentLeft={section.contentLeft ?? undefined}
                    contentRight={section.contentRight ?? undefined}
                    backgroundColor={section.backgroundColor ?? undefined}
                />
            ))}
        </PageLayout>
    );
};
