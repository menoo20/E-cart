import { useForm } from '@mantine/form';
import InputCurrency from './InputCurrency';
import InputStock from './InputStock';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import { Group, Button, Autocomplete, Text, SimpleGrid ,Container} from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import React, { forwardRef } from 'react'
import PhotoImport from './PhotoImport';
//import * as api from "../../helpers/api"


export default function Form() {
	const [dataName, setProductName] = useState('');
	const [dataSize, setProductSize] = useState('');
	const [dataColor, setProductColor] = useState('');
	const [dataCurrency, setCurrency] = useState('');
	const [dataPrice, setPrice] = useState(0);
	const [dataStock, setStock] = useState(1);
	const [dataCateg, setCateg] = useState('');

	const [dataDescription, setDescrition] = useState('');
	const [imageData, setImageData] = useState('')
	const [imagePath, setImagePath] = useState('')
	const [existingCategories, setExistingCategories] = useState([])
	const [existingBrands, setExistingBrands] = useState([])



	const form = useForm({
		initialValues: {
			title: '',
			color: '',
			size: '',
			/* stock: '', */
			/* category_id: '', */
			/* brand_id: '', */
			price: '',
			/* currency: 'egp', */
			desc: '',
			/* vote_count: 0,
			vote_total: 0, */
			img: '',
			categories:''
		}
	})


	console.log("form", form.values)

	//	console.log("dataCategory", dataCategory)


	function name(childData) {
		setProductName(childData);
		form.setFieldValue('title', childData)
	}
	function size(childData) {
		setProductSize(childData);
		form.setFieldValue('size', childData)
	}
	function color(childData) {
		setProductColor(childData);
		form.setFieldValue('color', childData)
	}
	function categ(childData) {
		setCateg(childData);
		form.setFieldValue('categories', childData)
	}
	function price(childData) {
		setPrice(childData);
		form.setFieldValue('price', Number(childData))
	}
	function currency(childData) {
		setCurrency(childData);
		form.setFieldValue('currency', childData)
	}
	function Stock(childData) {
		setStock(childData);
		form.setFieldValue('stock', childData)
	}
	function description(childData) {
		setDescrition(childData);
		form.setFieldValue('desc', childData)
	}
	function image(childData) {
		const imagePath = URL.createObjectURL(childData[0]);
		setImageData(imagePath)
		setImagePath(childData)
	}

	/* const getCategories = async () => {
		const data = await api.getCategories()
		setExistingCategories(data)
	}

	const getBrands = async () => {
		const data = await api.getBrands()
		setExistingBrands(data)
	}

	
	const categoryData = () => {
		let results = []
		existingCategories?.map((c) => {
			return results.push({ value: c.name, id: c.id })
		})
		return results
	}

	const brandData = () => {
		let results = []
		existingBrands?.map((c) => {
			return results.push({ value: c.name, id: c.id })
		})
		return results
	}
 */

	const query = useRef(null);
	const clearInput = () => {
		setProductName('')
		setProductSize('')
		setProductColor('');
		setCurrency('');
		setPrice(0);
		setStock(1);
		setDescrition('');
		setImageData('')
		setCateg('')
	}

	async function getSignature() {
		const response = await fetch('http://localhost:5000/api/images');
		const data = await response.json();
	//	console.log("dataaa", data)
		const { signature, timestamp } = data;
		return { signature, timestamp };
	}

	async function wait(call) {
		const url = `https://api.cloudinary.com/v1_1/storephotos/upload`;
		const { signature, timestamp } = await getSignature();
		const formData = new FormData();
		formData.append('file', imagePath[0]);
		formData.append('signature', signature);
		formData.append('timestamp', timestamp);
		formData.append('api_key', 437159287973424);
		const response = await axios.post(url, formData);
		const secured_url = response.data.secure_url;
		form.values.img = secured_url;
		call()
	}

	const handelSubmit = () => {

		const values = form.values;
		axios.post('http://localhost:5000/api/products', values)
			.then((response) => {
				console.log("ressssss", response)
				clearInput()
			})
			.catch(function (error) { console.log(error) })
	}

	useEffect(() => {
	//	getCategories()

	//	getBrands()
	}, [])




	return (
		<Container my="md">
		<form onSubmit={form.onSubmit(() => wait(handelSubmit))}>
			<SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
				<PhotoImport toParent={image} height='360px' radius='md' data={imageData} />
				<Group direction="column" className="overflow-auto d-inline-block">
					<InputText toParent={name} data={{ label: 'Product Name', placeholder: 'Product Name', value: dataName }} radius='md' />
					<InputText toParent={size} data={{ label: 'Product Size', placeholder: 'Product Size', value: dataSize }} radius='md' />
					<InputText toParent={color} data={{ label: 'Product Color', placeholder: 'Product Color', value: dataColor }} radius='md' />
					<InputText toParent={categ} data={{ label: 'Product Cateory', placeholder: 'Product Category', value: dataCateg }} radius='md' />
					{/* <Autocomplete transition="pop-top-left"
						transitionDuration={80}
						transitionTimingFunction="ease"
						size="lg"
						limit={10}
						placeholder="Enter Category "
						data={['React', 'Angular', 'Svelte', 'Vue']}
						data={categoryData()}
						ref={query}
						itemComponent={forwardRef(({ id, value, ...others }, query) => {
							return (
								<div {...others} ref={query}>
									<Text>{value}</Text>
								</div>
							)
						})}
						onItemSubmit={(item) =>
							form.setFieldValue('category_id', item.id)
						}
					/>
					<Autocomplete transition="pop-top-left"
						transitionDuration={80}
						transitionTimingFunction="ease"
						size="lg"
						limit={10}
						placeholder="Enter Brand "
						data={['React', 'Angular', 'Svelte', 'Vue']}
						data={brandData()}
						ref={query}
						itemComponent={forwardRef(({ id, value, ...others }, query) => {
							return (
								<div {...others} ref={query}>
									<Text>{value}</Text>
								</div>
							)
						})}
						onItemSubmit={(item) =>
							form.setFieldValue('brand_id', item.id)
						}
					/> */}
					<InputCurrency toParent={price} toParentTwo={currency} dataInput={{ value: dataPrice }} currency={dataCurrency} />
					{/* <InputStock toParent={Stock} value={dataStock} max='' /> */}
					<InputTextArea toParent={description} data={{ label: 'Description', placeholder: 'description', value: dataDescription }} />
					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</Group>
			</SimpleGrid>
		</form>
		</Container>
	)
}
