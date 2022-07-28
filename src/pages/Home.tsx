import React from 'react';
import MainLayout from "../components/layouts/MainLayout";
import Todo from "../components/todo/Todo";

const Home = () => {
    return (
        <MainLayout>
            <Todo />
        </MainLayout>
    );
};

export default Home;