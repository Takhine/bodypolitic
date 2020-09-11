import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import ReactPixel from 'react-facebook-pixel';

const { TextArea } = Input;

const successMessage = (messageSuccess) => {
    message.success({
        content: messageSuccess,
        // style: { zIndex: "15000" },
        duration: 5,
        maxCount: 1,
        top: 1500,
    });
};

const warningMessage = (errorInfo) => {
    message.error({
        content: errorInfo,
        // style: { zIndex: "15000" },
        duration: 5,
        maxCount: 1,
        top: 1500,
    });
};

// const trackContact = () => {
//     ReactPixel.trackCustom('ContactFormClick', {
//         click_date: new Date()
//     });
// }

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')

    const [form] = Form.useForm()



    const submitForm = (e) => {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // trackContact();
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step

            if (xhr.responseText === 'Message has been sent') {
                // message.success(emailStatus)
                // console.log(emailStatus)
                successMessage(xhr.responseText);
                form.resetFields();
                setName('');
                setEmail('');
                setContact('');
                setMessage('');
            } else {
                // console.log(emailStatus)
                // message.error(xhr.responseText)
                warningMessage(xhr.responseText);
            }

        });

        // open the request with the verb and the url
        xhr.open('GET', 'https://bodypolitic.info/contact.php?sendto=' + email +
            '&name=' + name + '&contact=' + contact + '&message=' + message);

        // send the request
        xhr.send();

        e.preventDefault();
    }

    return (
        <div id="contact">
            <h1 className="main-heading">
                Contact <span>Us</span>
            </h1>
            {/* <h5 className="main-heading">{emailStatus ? emailStatus : null}</h5> */}
            <div className="contact-form" >
                <Form
                    layout="horizontal"
                    form={form}
                >
                    <Form.Item name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" rules={[{ type: "email" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phone" value={contact} onChange={(e) => setContact(e.target.value)} label="Contact" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true }]}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    >
                        <TextArea />
                    </Form.Item>

                    <Form.Item className="button-container">
                        <Button type="primary" htmlType="submit" onClick={submitForm}>
                            Submit
            </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
