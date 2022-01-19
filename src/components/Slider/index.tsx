import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider() {
    return (
        <Flex direction="column" px="24" py="8" w="100%" maxWidth="1440px">
            <Flex direction="column" align="center" justify="center" w="100%">
                <Text color="gray.500" fontSize={["xl", "2xl"]}>Vamos nessa?</Text>
                <Text color="gray.500" fontSize={["xl", "2xl"]}>Então escolha seu continente</Text>
            </Flex>
            <Box py="8">
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]} 
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <Flex direction="column" align="center" justify="center" backgroundImage="/Slider/ContinentEurope.svg" w="1240px" h="450px">
                            <Text color="gray.100" fontSize={["xl", "3xl", "4xl"]} fontWeight="bold">Europa</Text>
                            <Text color="gray.100" fontSize={["lg", "2xl"]}>O continente mais antigo</Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex direction="column" align="center" justify="center" backgroundImage="/Slider/ContinentEurope.svg" w="1240px" h="450px">
                            <Text color="gray.100" fontSize={["xl", "3xl", "4xl"]} fontWeight="bold">América</Text>
                            <Text color="gray.100" fontSize={["lg", "2xl"]}>O maior em extensão Norte-Sul</Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex direction="column" align="center" justify="center" backgroundImage="/Slider/ContinentEurope.svg" w="1240px" h="450px">
                            <Text color="gray.100" fontSize={["xl", "3xl", "4xl"]} fontWeight="bold">Ásia</Text>
                            <Text color="gray.100" fontSize={["lg", "2xl"]}>O continente mais rico</Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex direction="column" align="center" justify="center" backgroundImage="/Slider/ContinentEurope.svg" w="1240px" h="450px">
                            <Text color="gray.100" fontSize={["xl", "3xl", "4xl"]} fontWeight="bold">África</Text>
                            <Text color="gray.100" fontSize={["lg", "2xl"]}>O berço da humanidade</Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex direction="column" align="center" justify="center" backgroundImage="/Slider/ContinentEurope.svg" w="1240px" h="450px">
                            <Text color="gray.100" fontSize={["xl", "3xl", "4xl"]} fontWeight="bold">Oceania</Text>
                            <Text color="gray.100" fontSize={["lg", "2xl"]}>O lar dos cangurus</Text>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Flex>
    )
}