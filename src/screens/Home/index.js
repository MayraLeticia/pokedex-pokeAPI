import "./style.scss";
import { Layout } from "../../components";
import React, { useContext } from 'react';
import { PokemonContext } from "../../services/PokemonContext";

const Home = () => {

    const context = useContext(PokemonContext)
    console.log(context);

    return (
        <Layout>
            <div className='home-container'>
                
            </div>
        </Layout>
    );
};

export default Home;