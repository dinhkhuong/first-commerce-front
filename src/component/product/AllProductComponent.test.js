import React, { Component } from 'react';
import renderer from 'react-test-renderer';

import AllProductComponent from './AllProductComponent';
import axios from "axios"




    // const tree = renderer.create(
    //     <AllProductComponent/>
    //     ).toJSON();
    // expect(tree).toMatchSnapshot();

    // const state = {
    //
    // }
    // const tree = renderer
    //     .create(<AllProductComponent product={ state }></AllProductComponent>)
    //     .toJSON();
    // expect(tree).toMatchSnapshot();


//https://stackoverflow.com/questions/53545881/how-to-take-a-jest-snapshot-after-axios-fetched-data-in-componentdidmount
jest.mock("axios")
const slides = sampleApiResponse()
const mockedAxiosGet = new Promise(() => ({ data: slides }))
axios.get.mockImplementation(() => mockedAxiosGet)

it("returns null initally", () => {
    const tree = renderer.create(<AllProductComponent />).toJSON()
    expect(tree).toMatchSnapshot()
})

it("uses fetched data to render AllProductComponent", () => {
    const tree = renderer.create(<AllProductComponent />)
    mockedAxiosGet.then(() => {
        expect(tree.toJSON()).toMatchSnapshot()
    })
})

function sampleApiResponse() {
    return [

        {
            productId: 2,
            productName: "pd name1",
            productDescription: "product descr dummy1",
            productPrice: 23,
            image: "https://i5.walmartimages.com/asr/b15a04a7-1630-4bc7-8df1-e537e1511150_1.aebae44f8ef9502922894071ae1dabf9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        }
        ]
}



