import { useState, useEffect } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Congratulations!",
      description: "Your message has been sent",
    });
  };

  const sendEmail = async () => {
    try {
      // Configura tu cuenta y plantilla de EmailJS
      const templateParams = {
        user_name: values.name,
        user_email: values.email,
        message: values.message,
      };

      // Reemplaza 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' con tus propias credenciales de EmailJS
      const response = await emailjs.send(
        "service_n3s23br",
        "template_i40ccj4",
        templateParams,
        "TOApBvoiFat3SBnt2"
      );

      // Verifica si el envío fue exitoso
      if (response.status === 200) {
        setShouldSubmit(true);
      } else {
        console.error("Error:", response.text);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));

    if (Object.values(values).every((x) => x !== "")) {
      await sendEmail();
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      //setValues({ name: "", email: "", message: "" });
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
