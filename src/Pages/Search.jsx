import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Badge, Box, Button, Grid, Heading, useToast } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { addCartRequest } from "../Redux/cart/api";
import { useDispatch, useSelector } from "react-redux";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Loading from "../Components/Loading";
export const Search = () => {
	const toast = useToast();
	const [searchParams] = useSearchParams();
	console.log("sepp", searchParams);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const searchQuery = searchParams.get("q") || "";
	const [mouse, setmouse] = useState(false);
	const id = localStorage.getItem("id");
	const allCartItems = useSelector((store) => store.cartReducer.cartItem);
	const dispatch = useDispatch();
	console.log(searchQuery);
	const [searchResults, setSearchResults] = useState(searchQuery || "");
	const [allData, setAllData] = useState([]);
	const gettingDatFromApiForSearch = () => {
		setLoading(true);
		setSearchResults(searchQuery);
		axios
			.get(`https://homeelementry.onrender.com/products?q=${searchQuery}`)
			.then((res) => {
				setTimeout(() => {
					setLoading(false);
					setAllData(res.data);
				}, 1000);
			})
			.catch((err) => {
				setError(true);
				console.log(err);
			});
	};

	const handlemouseenter = () => {
		setmouse(true);
	};

	const handlemouseout = () => {
		setmouse(false);
	};

	const handleCart = (el) => {
		const alreadyAdded = allCartItems.filter((product) => product.id === el.id);

		if (alreadyAdded.length === 1) {
			toast({
				title: "Product Alreacy  Added In Cart",
				variant: "subtle",
				status: "error",
				position: "top-right",
				duration: 1000,
				isClosable: true,
			});
			return;
		}
		if (id) {
			const newProductAddedtoCart = { ...el, quantity: 1 };
			const patchCartData = [...allCartItems, newProductAddedtoCart];
			dispatch(addCartRequest(id, patchCartData));
			toast({
				title: "Product Added In Cart",

				variant: "subtle",
				status: "success",
				position: "top-right",
				duration: 1000,
				isClosable: true,
			});
			console.log(id);
		} else {
			toast({
				title: "Please Login First",
				status: "error",
				duration: 500,
				isClosable: true,
				position: "top",
			});
		}
	};

	useEffect(() => {
		gettingDatFromApiForSearch();
		setSearchResults(searchQuery);
	}, [searchQuery]);

	return (
		<Box m="auto">
			{loading ? (
				<Loading />
			) : allData.length ? (
				<Grid
					templateColumns={{
						base: "repeat(1,1fr)",
						sm: "repeat(2,1fr)",
						md: "repeat(4,1fr)",
					}}
					justifyContent={"space-around"}
					gap={{ base: "1", md: "3", lg: "4" }}
				>
					{allData?.map((el) => (
						<Box
							maxW="sm"
							borderWidth="1px"
							borderRadius="lg"
							w={"70%"}
							overflow="hidden"
							m={"auto"}
							mt={"8"}
							onMouseEnter={handlemouseenter}
							onMouseOut={handlemouseout}
							_hover={{
								border: "3px solid orange",
								padding: "2",
								borderRadius: "5",
								cursor: "pointer",
							}}
						>
							<Link to={`${el.id}`}>
								<Image
									src={el.images[0]}
									alt={"dummy"}
									w={"100%"}
									cursor={"pointer"}
								/>
							</Link>
							{mouse ? (
								<Button
									position={"relative"}
									top={"-60px"}
									colorScheme="orange"
									onMouseEnter={handlemouseenter}
									onClick={() => handleCart(el)}
								>
									Add to Cart
								</Button>
							) : (
								""
							)}
							<Box p="1">
								<Box display="flex" alignItems="start">
									<Badge borderRadius="full" px="2" colorScheme="teal">
										New
									</Badge>
								</Box>

								<Box
									textAlign={"start"}
									fontWeight="semibold"
									fontSize={"xl"}
									as="h4"
									lineHeight="25px"
									noOfLines={1}
								>
									{el.title}
								</Box>

								<Box textAlign={"start"} as="h4" fontWeight={"semibold"}>
									{el.brand}
								</Box>

								<Box
									color="orange.300"
									fontSize={"md"}
									fontWeight={"bold"}
									textAlign={"start"}
								>
									₹ {el.price}
								</Box>

								<Box
									color="green.300"
									fontSize="md"
									fontWeight={"bold"}
									textAlign={"start"}
								>
									{el.discount}% off
								</Box>

								<Box display="flex" mt="2" alignItems="center">
									<Box
										as="span"
										color="gray.600"
										fontSize="md"
										textAlign={"start"}
									>
										{el.warranty} Month's Warranty
									</Box>
								</Box>
							</Box>
						</Box>
					))}
				</Grid>
			) : (
				<Box w={"80%"} h="200px" p="14" m="auto">
					<SentimentVeryDissatisfiedIcon fontSize="large" />

					<SentimentVeryDissatisfiedIcon fontSize="large" />

					<SentimentVeryDissatisfiedIcon fontSize="large" />

					<Heading>Sorry! Product Not Found</Heading>
				</Box>
			)}
		</Box>
	);
};
