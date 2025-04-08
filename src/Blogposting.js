
import React, { useState } from "react";

function BlogPosting() {
    // form data management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        content: ''
    });

    // For handling errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        title: '',
        content: ''
    });

    //for posting blog
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [posts, setPosts] = useState([]); //stores blog posts

    //handling event
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' })
        }
    };

    //form validation
    const validateForm = () => {

        let isValid = true;
        const newErrors = { ...errors };

        //validate name
        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        //validate email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        //validate title
        if (!formData.title) {
            newErrors.title = 'Title is required';
            isValid = false;
        }

        //validate content
        if (!formData.content) {
            newErrors.content = 'Content is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;

    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log('Form Submitted', formData);
                alert('Blog posted succesfully.');
                const newPost = {
                    ...formData,
                    date: new Date().toLocaleDateString('en-us', {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    })
                };
                setPosts([newPost, ...posts]);
                setFormData({ name: '', email: '', title: '', content: '' });
                setIsSubmitting(false);
            })
        }
    }


    return (
        <><div className="container p-5" id="blogContainer">
            {posts.map((post, index) => (
                <div key={index} className="blog-post p-3 mb-4 border rounded">
                    <div className="d-flex align-items-center mb-2">
                        <img src="images/user_icon.png" alt="icon" width={15} className="me-2" />
                        <h5 className="mb-0">{post.name}</h5>
                        <img src="images/calendar_clock_icon.ico" alt="clock_icon" width={15} className="ms-3 me-2" />
                        <h5 className="mb-0">{post.date}</h5>
                    </div>
                    <h4 className="d-flex align-items-center mb-2">{post.title}</h4>
                    <p className="d-flex align-items-center mb-2">{post.content}</p>
                </div>
            ))}
        </div><div className="input-container p-5">
                <form onSubmit={handleSubmit}>
                    <div className="inputline-container p-5  mb-4 border">
                        <div className="row mb-2 ">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogTitle"
                                    placeholder="Title"
                                    onChange={handleChange}
                                    name="title"
                                    value={formData.title}
                                />
                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}

                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-md-10">
                                <textarea
                                    placeholder="Post content"
                                    className="form-control"
                                    id="content"
                                    required
                                    onChange={handleChange}
                                    name="content"
                                    value={formData.content}
                                />
                                {errors.content && <div className="invalid-feedback">{errors.content}</div>}

                            </div>
                            <div className="col-md-2">
                                <button type="submit" id="submitBtn" className="btn btn-primary h-100 w-100" >
                                    {isSubmitting ? 'Posting' : 'Post'}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div></>
    );
};

export default BlogPosting;