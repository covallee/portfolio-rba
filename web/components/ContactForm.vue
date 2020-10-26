<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="honey-field"
  >
    <p class="hidden">
      <label
        >Don’t fill this out if you're human: <input name="honey-field"
      /></label>
    </p>
    <p class="field">
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p class="field">
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p class="field">
      <label>Message: <textarea name="message" rows="4"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</template>

<script>
export default {}
</script>

<style>
form {
  & label {
    font-size: 20px;
  }

  & .field {
    font-size: 20px;
    margin: 1rem 0;
    font-style: italic;
    font-weight: 700;
    color: #555;
  }

  & input,
  & textarea {
    width: 100%;
    margin: 1rem 0;
  }

  & button {
    font-size: 23px;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    color: #6a6052;
    background-color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #555555;
    }
  }
}
</style>
