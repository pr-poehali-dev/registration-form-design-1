import { useRegistration } from "@/hooks/useRegistration";
import RegistrationForm from "@/components/registration/RegistrationForm";
import RegistrationSuccess from "@/components/registration/RegistrationSuccess";

const Registration = () => {
  const { form, isSubmitting, isSuccess, handleSubmit } = useRegistration();

  if (isSuccess) {
    return <RegistrationSuccess />;
  }

  return (
    <RegistrationForm
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit}
    />
  );
};

export default Registration;
