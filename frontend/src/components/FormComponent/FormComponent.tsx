import {useForm, type SubmitHandler} from 'react-hook-form';
import './form-component.scss';
import type {FC, JSX} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from '../OurExperts/yupSchema';
import type {FormData} from "../OurExperts/yupSchema";

const FormComponent: FC = (): JSX.Element => {

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const request = schema.cast({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      number: data.number,
      description: data.description
    })
    alert(`
    Запрос на сервер был успешно отправлен!
    
    Данные запроса:
     Имя: ${request.firstName}
     Фамилия: ${request.lastName}
     Почта: ${request.email}
     Номер телефона: ${request.number}
     Описание: ${request.description}
    `)
  }

  return (
    <div className={'form-component'}>
      <img
        className={'form-component__image'}
        src="../../../public/pictures/bg.png"
        alt=""
        width=""
        height=""
        loading="lazy"
      />

      <img
        className={'form-component__decor'}
        src="../../../public/icons/svg.png"
        alt=""
        width=""
        height=""
        loading="lazy"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'form-component__form-item'}
        id={'form'}
        method={'POST'}
      >
        <h2 className={'form-component__form-item__title'}>Request an Appointment</h2>
        <p className={'form-component__form-item__text'}>Proin gravida nibh vel velit auctor aliquet justo.</p>

        <div className={'form-component__form-item__grid-container'}>
          <label htmlFor={"Enter first name"}>
            <input
              className={'form-component__form-item__grid-container__input'}
              {...register("firstName")}
              type={'text'}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </label>
          <label htmlFor={"Enter last name"}>
            <input
              className={'form-component__form-item__grid-container__input'}
              {...register("lastName")}
              type={'text'}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </label>
          <label htmlFor={"Enter E-Mail address"}>
            <input
              {...register("email")}
              className={'form-component__form-item__grid-container__input'}
              type={'email'}
              id="email"
              name="email"
              placeholder="E-Mail Address"
            />
          </label>
          <label htmlFor={"Enter Phone number"}>
            <input
              {...register("number")}
              className={'form-component__form-item__grid-container__input'}
              type={'number'}
              id="number"
              name="number"
              placeholder="Phone Number"
            />
          </label>
        </div>

        <label htmlFor="Write a description">
            <textarea
              {...register("description")}
              className={'form-component__form-item__text-area'}
            >
            </textarea>
        </label>

        <button
          className={'form-component__form-item__button'}
          type="submit"
        >
          SEND REQUEST
        </button>
      </form>
    </div>
  );
};

export default FormComponent;