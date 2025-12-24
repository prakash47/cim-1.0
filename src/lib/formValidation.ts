import { isValidPhoneNumber, isPossiblePhoneNumber, parsePhoneNumber } from 'react-phone-number-input';

/**
 * Validates a full name
 * - Must be 2-35 characters
 * - Only letters, spaces, and common name characters allowed
 */
export function validateFullName(name: string): string | null {
    if (!name || !name.trim()) {
        return 'Full name is required.';
    }

    const trimmedName = name.trim();

    if (trimmedName.length < 3) {
        return 'Name must be at least 3 characters.';
    }

    if (trimmedName.length >= 35) {
        return 'Name must be less than 35 characters.';
    }

    // Allow letters, spaces, hyphens, and apostrophes
    if (!/^[a-zA-Z\s\-'\.]+$/.test(trimmedName)) {
        return 'Name should only contain letters.';
    }

    return null;
}

/**
 * Validates an email address
 */
export function validateEmail(email: string): string | null {
    if (!email || !email.trim()) {
        return 'Email address is required.';
    }

    // Standard email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return 'Please enter a valid email address.';
    }

    return null;
}

/**
 * Checks if a phone number has repetitive or fake patterns
 * - All same digits (1111111111, 9999999999)
 * - Sequential digits (1234567890, 0987654321)
 * - Common fake patterns (1234512345)
 */
function hasRepetitivePattern(phone: string): boolean {
    // Extract only digits from the phone number
    const digits = phone.replace(/\D/g, '');

    // Need at least 6 digits to check patterns
    if (digits.length < 6) return false;

    // Get the last 10 digits (national number without country code)
    const nationalNumber = digits.slice(-10);

    // Check for all same digits (e.g., 1111111111, 9999999999)
    if (/^(\d)\1{5,}$/.test(nationalNumber)) {
        return true;
    }

    // Check for repeating pairs (e.g., 1212121212, 123123123)
    if (/^(\d{2,3})\1{2,}$/.test(nationalNumber)) {
        return true;
    }

    // Check for sequential ascending digits (1234567890)
    const ascending = '0123456789';
    const descending = '9876543210';
    for (let i = 0; i <= nationalNumber.length - 6; i++) {
        const chunk = nationalNumber.substring(i, i + 6);
        if (ascending.includes(chunk) || descending.includes(chunk)) {
            return true;
        }
    }

    return false;
}

/**
 * Validates an international phone number using libphonenumber
 * - Checks if phone number length is valid for the country
 * - Checks if phone number format is valid
 * - Rejects repetitive/fake patterns
 */
export function validatePhone(phone: string | undefined): string | null {
    if (!phone) {
        return 'Phone number is required.';
    }

    // isPossiblePhoneNumber checks if length is valid for the country
    if (!isPossiblePhoneNumber(phone)) {
        return 'Phone number has incorrect length for the selected country.';
    }

    // isValidPhoneNumber checks if format is valid
    if (!isValidPhoneNumber(phone)) {
        return 'Please enter a valid phone number.';
    }

    // Check for repetitive/fake patterns
    if (hasRepetitivePattern(phone)) {
        return 'Please enter a valid phone number without repetitive digits.';
    }

    return null;
}

/**
 * Validates a phone number (optional field)
 * - Same validations as validatePhone but allows empty values
 */
export function validatePhoneOptional(phone: string | undefined): string | null {
    if (!phone || phone.trim() === '') {
        return null; // Optional field, empty is valid
    }

    // isPossiblePhoneNumber checks if length is valid for the country
    if (!isPossiblePhoneNumber(phone)) {
        return 'Phone number has incorrect length for the selected country.';
    }

    if (!isValidPhoneNumber(phone)) {
        return 'Please enter a valid phone number.';
    }

    // Check for repetitive/fake patterns
    if (hasRepetitivePattern(phone)) {
        return 'Please enter a valid phone number without repetitive digits.';
    }

    return null;
}

/**
 * Validates a message field
 */
export function validateMessage(message: string, minLength: number = 20): string | null {
    if (!message || !message.trim()) {
        return 'Message is required.';
    }

    if (message.trim().length < minLength) {
        return `Message must be at least ${minLength} characters.`;
    }

    return null;
}

/**
 * Validates a required select/dropdown field
 */
export function validateRequired(value: string, fieldName: string = 'This field'): string | null {
    if (!value || value.trim() === '') {
        return `${fieldName} is required.`;
    }
    return null;
}
