import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FeedbackFormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-top: 8px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  resize: vertical;
  height: 150px;
  padding: 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-top: 8px;

  &:focus {
    border-color: #007BFF;
  }
`;

const RatingSelect = styled.select`
  appearance: none;
  background-color: #fff;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  cursor: pointer;
  font-size: 1rem;

  &:focus {
    border-color: #007BFF;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007BFF;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted! Thank you for your input.');
    // You can submit the form to a backend or any other logic here
  };

  return (
    <FeedbackFormContainer>
      <Title>We Value Your Feedback</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="feedback">Your Feedback</Label>
          <Textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            placeholder="Write your feedback here"
          />
        </FormGroup>

        <FormGroup>
          <Label>Rating</Label>
          <RatingSelect
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </RatingSelect>
        </FormGroup>

        <FormActions>
          <SubmitButton type="submit">Submit Feedback</SubmitButton>
        </FormActions>
      </Form>
    </FeedbackFormContainer>
  );
};

export default FeedbackForm;
