'use client'

import Image from "next/image";
import { PageHandler } from "../types";
import Navbar from "@/components/Navbar";

import logo from '@/public/logo.svg'
import home from '@/public/owner_page/Home.svg'
import menu from '@/public/owner_page/Menu.svg'
import tracking from '@/public/owner_page/Tracking.svg'
import analysis from '@/public/owner_page/Analytics.svg'
import profit from '@/public/owner_page/Profits.svg'
import ratings from '@/public/owner_page/Ratings.svg'
import briefCase from '@/public/owner_page/BriefCase.svg'
import samosa from '@/public/owner_page/samosa.png'
import { IconMapPin } from '@tabler/icons-react';

import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from "react";

type PageState = 'Home' |
    'Menu' |
    'Tracking' |
    'Analysis' |
    'Profit';

const Item: FunctionComponent<{
    src: any;
    alt: PageState;
    pageState: PageState;
    setPageState: Dispatch<SetStateAction<PageState>>
}> = ({ src, alt, pageState, setPageState }) => {
    const image = <Image className="m-2" src={src} alt={alt} />;
    const onClick = () => setPageState(alt);
    if (pageState == alt) {
        return <div onClick={onClick} className="bg-white-0 hover:cursor-pointer rounded-lg">
            {image}
        </div>
    }
    return <div onClick={onClick} className="hover:bg-white-0 hover:cursor-pointer rounded-lg">
        {image}
    </div>
}

type FilterType = 'none' | 'rating' | 'sell'

type MenuItem = {
    name: string;
    image: any;
    price: number;
    rating: number;
    location: string;
}

const menuItems: MenuItem[] = [
    { name: 'Samosa1', image: samosa, location: '1', price: 2, rating: 1 },
    { name: 'Samosa2', image: samosa, location: '2', price: 1.55, rating: 3 },
    { name: 'Samosa3', image: samosa, location: '3', price: 1.85, rating: 4 },
    { name: 'Samosa4', image: samosa, location: '4', price: 1.65, rating: 6 },
    { name: 'Samosa5', image: samosa, location: '5', price: 1.75, rating: 2 },
    { name: 'Samosa6', image: samosa, location: '6', price: 1.55, rating: 5 },
];

const MenuItemComp: FunctionComponent<{ item: MenuItem }> = ({
    item: { name, image, location, price, rating }
}) => (
    <div>
        <Image src={image} alt={name} />
        <div className="flex justify-between text-2xl pl-4 pr-4 bg-white-0 rounded-b-lg">
            <div className="flex flex-col gap-3">
                <div>${price}</div>
                <div>{name}</div>
            </div>
            <div className="flex flex-col gap-3">
                <div>{rating}</div>
                <div className="flex gap-2">
                    <IconMapPin />
                    {location}
                </div>
            </div>
        </div>
    </div>
)

const Home: FunctionComponent<{}> = () => {
    const [filter, setFilter] = useState<FilterType>('none');
    const toggleFilter = (f: FilterType) => {
        if (f == filter) {
            setFilter('none');
            return;
        }
        setFilter(f);
    }
    return <div className="flex">
        <div className="pl-6 pt-4 bg-white-100 w-60 border border-white-0 h-full">
            <div className="text-primary text-3xl mb-4">View by</div>
            <div onClick={() => toggleFilter('rating')} className="hover:cursor-pointer flex gap-2 text-xl">
                <Image src={ratings} alt="Rating Filter" />
                {
                    filter == 'rating' ?
                    <div className="text-primary">Rating</div>
                    : <div>Rating</div>
                }
            </div>
            <div onClick={() => toggleFilter('sell')} className="hover:cursor-pointer flex gap-2 text-xl">
                <Image src={briefCase} alt="Sell Count Filter" />
                {
                    filter == 'sell' ?
                <div className="text-primary">Sell Count</div>
                : <div>Sell Count</div>
                }
            </div>
        </div>
        <div className="grid grid-cols-3 gap-5 p-4">
            {[...menuItems]
            .sort((a, b) => {
                switch (filter) {
                    case "none": return 0;
                    case "rating": return a.rating - b.rating;
                    case "sell": return a.price - b.price;
                }
            })
            .map((menuItem) => <MenuItemComp item={menuItem} />)}
        </div>
    </div>
}
const Menu: FunctionComponent<{}> = () => {
    return <></>
}
const Tracking: FunctionComponent<{}> = () => {
    return <></>
}
const Analysis: FunctionComponent<{}> = () => {
    return <></>
}
const Profit: FunctionComponent<{}> = () => {
    return <></>
}

const Content: FunctionComponent<{
    state: PageState
}> = ({ state }) => {
    switch (state) {
        case "Home": return <Home />
        case "Menu": return <Menu />
        case "Tracking": return <Tracking />
        case "Analysis": return <Analysis />
        case "Profit": return <Profit />
    }
}

const Page: PageHandler = ({ searchParams }) => {
    const [pageState, setPageState] = useState<PageState>('Home');
    return (
    <>
      <Navbar path="auth" />
      <div className="flex">
        <div className="flex flex-col bg-white-50 h-screen items-center w-20 p-4 gap-4">
            <Image src={logo} alt="Logo" />
            <Item pageState={pageState} setPageState={setPageState} src={home} alt="Home" />
            <Item pageState={pageState} setPageState={setPageState} src={menu} alt="Menu" />
            <Item pageState={pageState} setPageState={setPageState} src={tracking} alt="Tracking" />
            <Item pageState={pageState} setPageState={setPageState} src={analysis} alt="Analysis" />
            <Item pageState={pageState} setPageState={setPageState} src={profit} alt="Profit" />
        </div>
        <Content state={pageState} />
      </div>
    </>
  );
};
export default Page;
