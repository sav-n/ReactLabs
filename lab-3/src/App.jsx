import  { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormSection from "./FormSection";
import "./formStyles.css";

// Валідація
const schema = yup.object({
    category: yup.string().required("Please select a primary category."),
    subCategory: yup.string().required("Please select a subcategory."),
    country: yup.string().required("Please select a country."),
    name: yup.string().required("Name is required."),
    email: yup.string().email("Invalid email address").required("Email is required."),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required."),
    terms: yup.boolean().oneOf([true], "You must accept the terms.")
});

const App = () => {
    const [step, setStep] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const categories = ["Games", "Music", "Art"]; 

    const handleNextStep = () => setStep((prevStep) => prevStep + 1);
    const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="form-container">
            <h1 className="title">KICKSTARTER</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormSection
                    step={step}
                    control={control}
                    setValue={setValue}
                    errors={errors}
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                    categories={categories}
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                    selectedSubCategory={selectedSubCategory} 
                    setSelectedSubCategory={setSelectedSubCategory} 
                />
            </form>
        </div>
    );
};

export default App;
