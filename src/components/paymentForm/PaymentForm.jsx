import "./paymentForm.scss";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";

const paymentScheme = Yup.object().shape({
    fullname: Yup.string().min(2, "Минимум 2 символа").required("Введите ФИО получателя."),
    email: Yup.string().email("Неверный формат почты").required("Введите почту, отправим вам чек."),
    phoneNumber: Yup.string().required("Введите ваш номер телефона, куда придет уведомление о получении.")
});

const PaymentForm = () => {
    return (
        <section className="payment">
            <div className="container">
                <div className="row">
                    <div className="payment__wrapper">
                        <h1 className="title">Оплата</h1>
                        <Formik
                            id="paymentForm"
                            initialValues={{
                                fullname: "",
                                email: "",
                                phoneNumber: "",
                                address: "",
                                apartament: "",
                                zipcode: "",
                                contatUrl: ""
                            }}
                            validationSchema={paymentScheme}>
                            {({ values }) => (
                                <Form onSubmit={e => {
                                    // same shape as initial values
                                    e.preventDefault();
                                    console.log(values);
                                }}>
                                    <Field type="text" name="fullname" placeholder="ФИО" id="fullname" values={values.fullname} />
                                    <ErrorMessage name="fullname" component="div" />

                                    <Field type="email" name="email" placeholder="E-mail" id="email" values={values.email} />
                                    <ErrorMessage name="email" component="div" />

                                    <Field type="tel" name="phoneNumber" placeholder="Телефон" id="phoneNumber" values={values.phoneNumber} />
                                    <ErrorMessage name="phoneNumber" component="div" />

                                    <div className="payment__wrapper-address">
                                        <Field type="text" name="address" placeholder="Населенный пункт, улица, дом" id="address" values={values.address} />
                                        <ErrorMessage name="address" component="div" />

                                        <Field type="text" name="apartament" placeholder="Квартира" id="apartament" values={values.apartament} />
                                        <ErrorMessage name="apartament" component="div" />
                                    </div>

                                    <Field type="text" name="zipcode" placeholder="Индекс (6 цифр)" id="zipcode" values={values.zipcode} />
                                    <ErrorMessage name="zipcode" component="div" />

                                    <Field type="text" name="contactUrl" placeholder="Ссылка на VK или Instagram для связи" id="contactUrl" values={values.contatUrl} />
                                    <ErrorMessage name="contactUrl" component="div" />

                                    <button className="btn btn_wide" type="submit">Оплатить 3.840 ₽</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentForm;