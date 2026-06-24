
export interface InputProps {
    placeholder?: string;
    name?: string;
}


export function Input ({placeholder, name} : InputProps) {
    return (
        <div>
            <input placeholder={placeholder} name={name} />
        </div>
    );
}