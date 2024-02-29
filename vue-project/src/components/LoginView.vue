<template>
  <form>
    <h3>Log in with Email</h3>
    <p>Please enter a valid mod.io email address</p>
    <label>
      Email address:
      <input type="text" placeholder="abc@example.com" />
    </label>
    <button>Get code</button>
  </form>
</template>

<style scoped>
form {
  background-color: #333048;
  max-width: 400px;
  margin: 0 auto;
}
label {
  color: white;
  display: flex;
  flex-direction: column;
}
button {
  background-color: #048383;
  color: white;
}
</style>
