/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const EditHairs = () => {
  const {id} = useParams();
  const {title, imageURL, category, hairDescription, price} = useLoaderData();


    const hairCategories = [
    "Long",
    "Short",
    "Curly",
    "Wavy",
    "Straight",
    "Thick",
    "Thin",
    "New",
    "Dangles",
    "Featured",
  ]
  const [selectedHairCategory, setSelectedHairCategory] = useState(hairCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log("Selected Value: ", event.target.value);
    setSelectedHairCategory(event.target.value);
  };

      // handle hair submission
      const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log("Form submitted with values:", {
          title: event.target.title.value,
          price: event.target.price.value,
          imageURL: event.target.imageURL.value,
          hairCategory: selectedHairCategory,
          hairDescription: event.target.hairDescription.value,
        });

        const updateHairObj = {
          title: event.target.title.value,
          price: event.target.price.value,
          imageURL: event.target.imageURL.value,
          hairCategory: selectedHairCategory,
          hairDescription: event.target.hairDescription.value,
        }

        // Update data 
        fetch(`http://localhost:5000/hair/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateHairObj),
        }).then(res => res.json()).then(data => {
          // console.log(data)
          alert("Hair Is Updated Successfully!");
        });
        
      };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold font-quickSand">Update The Hair Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Hair Title" />
        </div>
        <TextInput id="title" type="text" name="title" placeholder="Hair Name..." required defaultValue={title} />
      </div>
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price" />
        </div>
        <TextInput id="price" type="text" name="price" placeholder="Hair Price..." required defaultValue={price} />
      </div>
      </div>
      
      {/* Second Row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Hair Image URL" />
        </div>
        <TextInput id="imageURL" type="text" name="imageURL" placeholder="Hair Image URL..." required defaultValue={imageURL} />
      </div>
      <div className="lg:w-1/2">
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Hair Category" />
        </div>
          <select id="inputState" name="categoryName" className="w-full rounded" value={selectedHairCategory} onChange={handleChangeSelectedValue}>
              {
                hairCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))
              }
          </select>

      </div>
      </div>

      {/* Hair Descriptions */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="hairDescription" value="Hair Description" />
        </div>
        <Textarea id="hairDescription" name="hairDescription" className="w-full" placeholder="Hair Description...." required rows={6} defaultValue={hairDescription} />
      </div>
      
      <Button type="submit" className="bg-teal-400 mt-5">Update</Button>

    </form>
    </div>
  );
}

export default EditHairs