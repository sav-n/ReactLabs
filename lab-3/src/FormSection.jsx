import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

const FormSection = ({
    step,
    control,
    setValue,
    errors,
    handleNextStep,
    handlePreviousStep,
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
}) => {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        if (selectedCategory === "Games") {
            setSubCategories(["Mobile Games", "Video Games", "Live Games"]); 
        } else if (selectedCategory === "Music") {
            setSubCategories(["Jazz", "Metal", "Hip-Hop"]); 
        } else if (selectedCategory === "Art") {
            setSubCategories(["Ceramics", "Conceptual Art", "Digital Art"]); 
        } else {
            setSubCategories([]);
        }

        setValue("subCategory", "");
    }, [selectedCategory, setValue]);

    switch (step) {
        case 0:
            return (
                <div className="form-step">
                    <h2>Select a primary category and subcategory for your new project.</h2> 
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <select
                                    {...field}
                                    value={field.value || selectedCategory || ""}
                                    onChange={(e) => {
                                        const category = e.target.value;
                                        setSelectedCategory(category);
                                        setValue("category", category);
                                    }}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && <span>{errors.category.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="subCategory"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <select
                                    {...field}
                                    value={field.value || selectedSubCategory || ""}
                                    disabled={!selectedCategory}
                                    onChange={(e) => {
                                        const subCategory = e.target.value;
                                        setSelectedSubCategory(subCategory);
                                        setValue("subCategory", subCategory);
                                    }}
                                >
                                    <option value="">Select a subcategory</option>
                                    {subCategories.length > 0 ? (
                                        subCategories.map((sub) => (
                                            <option key={sub} value={sub}>
                                                {sub}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="">No subcategories available</option>
                                    )}
                                </select>
                                {errors.subCategory && <span>{errors.subCategory.message}</span>}
                            </div>
                        )}
                    />
                    <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!selectedCategory || !subCategories.length}
                    >
                        Next
                    </button>
                </div>
            );

        case 1:
            return (
                <div className="form-step">
                    <h2>Select your country</h2>
                    <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <select {...field} value={field.value || ""}>
                                    <option value="">Select a country</option>
                                    <option value="ukraine">Ukraine</option>
                                    <option value="german">German</option>
                                    <option value="france">France</option>
                                    <option value="china">China</option>
                                    <option value="japan">Japan</option>
                                    <option value="mexico">Mexico</option>
                                </select>
                                {errors.country && <span>{errors.country.message}</span>}
                            </div>
                        )}
                    />
                    <button type="button" onClick={handlePreviousStep}>Back</button>
                    <button type="button" onClick={handleNextStep}>Next</button>
                </div>
            );

        case 2:
            return (
                <div className="form-step">
                    <h2>Personal Information</h2>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input {...field} placeholder="Name" value={field.value || ""} />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input {...field} placeholder="Email" value={field.value || ""} />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input {...field} type="password" placeholder="Password" value={field.value || ""} />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="terms"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <label>
                                    <input type="checkbox" {...field} checked={field.value || false} />
                                    Send me a weekly mix of handpicked projects, plus occasional Kickstarter news
                                </label>
                                <div>
                                    <label>
                                        <input type="checkbox" {...field} checked={field.value || false} />
                                        Contact me about participating in Kickstarter research
                                    </label>
                                    {errors.terms && <span>{errors.terms.message}</span>}
                                </div>
                            </div>
                        )}
                    />
                    <button type="submit">Submit</button>
                </div>
            );

        default:
            return null;
    }
};

export default FormSection;
