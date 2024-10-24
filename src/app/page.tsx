import React from "react";
import Image from "next/image";
import image2 from '../../public/image2.jpg';

export default function Home() {
    const blogPosts = [
        {
            title: "First Blog Post",
            description: "This is a brief description of the first blog post.",
            imageUrl: image2,
        },
        {
            title: "Second Blog Post",
            description: "This is a brief description of the second blog post.",
            imageUrl: image2,
        },
        {
            title: "Third Blog Post",
            description: "This is a brief description of the third blog post.",
            imageUrl: image2,
        },
    ];

    return (
        <main className="flex flex-col min-w-full min-h-screen items-center pt-10 lg:px-60 gap-10 bg-base-100">
            <div className="text-center py-10 flex flex-row justify-center">
                <div className="justify-items-start mr-10 content-center">
                    <h1 className="text-4xl lg:text-7xl font-bold text-primary text-left">
                        Your Blog Page!
                    </h1>
                    <p className="text-lg text-base-content mt-5 max-w-[40rem] text-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>
                <div className="w-1/2 content-center">
                    <Image src={image2} alt="Alt"/>
                </div>
            </div>
            <div className="bg-base-200 w-full h-40 content-center">
                <h1 className="text-center font-bold text-8xl text-primary">Latest Posts</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-5">
                {blogPosts.map((post, index) => (
                    <div key={index} className="card w-full bg-base-200 shadow-xl">
                        <figure>
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                className="rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">{post.title}</h2>
                            <p>{post.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
