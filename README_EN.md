# react-safe-password

## Description

**react-safe-password** is a React project that allows users to generate secure and random passwords. In addition to generating completely random passwords, the project offers the option to include a custom word provided by the user in the generated password. This provides an additional layer of personalization and memorability without compromising security.

## Features

- **Random Password Generation**: Creates strong passwords using combinations of uppercase letters, lowercase letters, numbers, and symbols.
- **User-Provided Word Personalization**: Allows inclusion of a specific word chosen by the user in the generated password.
- **Intuitive Interface**: Simple and user-friendly interface built with React and Ant Design.
- **Copy to Clipboard**: Function to copy the generated password directly to the clipboard with one click.

## Usage

1. Access the application on Vercel: [react-safe-password](https://react-safe-password.vercel.app)
2. Configure the password options, such as inclusion of uppercase letters, lowercase letters, numbers, and symbols.
3. (Optional) Enter a custom word to be included in the password.
4. Click the "Generate Password" button to generate the password.
5. Copy the generated password to the clipboard using the "Copy Password" button.

## Importance of Secure Passwords

In the realm of cybersecurity, the importance of secure passwords cannot be overstated. Strong and unique passwords are the first line of defense against cyber attacks, such as hacking attempts, identity theft, and unauthorized access to sensitive information. Using weak or repeated passwords across different services significantly increases the risk of data breaches.

### CWE-521: Weak Password Requirements

**CWE-521: Weak Password Requirements** is a security weakness that occurs when a system allows the use of passwords that do not meet minimum strength and complexity requirements. This can include short passwords, passwords without special characters, or passwords that are easy to guess or break using brute force or dictionary attacks.

#### Importance of Strong Password Requirements

Weak passwords are one of the main causes of security breaches in IT systems. When passwords are not complex enough, they can be easily guessed or cracked by attackers, putting sensitive data and critical systems at risk. Establishing strong password requirements is essential to protect against unauthorized access and other cyber threats.

#### Examples of Strong Password Requirements

To avoid the CWE-521 weakness, systems should enforce password policies that include:

- **Minimum Length**: Passwords should have a minimum length (e.g., 8 characters or more).
- **Complexity**: Passwords should include a combination of uppercase letters, lowercase letters, numbers, and special characters.
- **Ban on Common Passwords**: Passwords should not be in a list of common or easily guessable passwords.
- **Password Expiration**: Passwords should expire after a certain period, requiring users to create new passwords periodically.
- **Password History Check**: Prevent users from reusing their old passwords.

#### Mitigations

To mitigate the risks associated with weak passwords (CWE-521), the following practices can be implemented:

1. **Strong Password Policies**: Implement policies that require long and complex passwords.
2. **User Education**: Educate users on the importance of creating strong and unique passwords.
3. **Multi-Factor Authentication (MFA)**: Adopt MFA to add an extra layer of security beyond passwords.
4. **Password Management Tools**: Use password managers to help users create and store strong and unique passwords.

### Reference

For more details on CWE-521, visit the official [CWE-521: Weak Password Requirements](https://cwe.mitre.org/data/definitions/521.html) page.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more details.

Para a versão em português deste README, clique [aqui](README.md).
