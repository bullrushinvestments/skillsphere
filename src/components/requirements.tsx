import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  contentType: string;
  targetAudience: string;
  keyFeatures: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<GatherRequirementsFormValues>();
  const router = useRouter();

  const onSubmit = (data: GatherRequirementsFormValues) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      router.push('/confirmation');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <label htmlFor="contentType" className="block text-sm font-medium leading-5 text-gray-700">
            Content Type
          </label>
          <input
            id="contentType"
            type="text"
            {...register('contentType', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <label htmlFor="targetAudience" className="block mt-4 text-sm font-medium leading-5 text-gray-700">
            Target Audience
          </label>
          <input
            id="targetAudience"
            type="text"
            {...register('targetAudience', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <div className="mt-4">
            <label htmlFor="keyFeatures" className="block text-sm font-medium leading-5 text-gray-700">
              Key Features
            </label>
            {formState?.errors.keyFeatures && (
              <p role="alert" aria-live="assertive" className="text-red-600 mt-1 block sm:inline-block">
                Please add at least one key feature.
              </p>
            )}
            <div id="keyFeatures">
              {Array.from({ length: 2 }, (_, i) => (
                <React.Fragment key={i}>
                  <label htmlFor={`featureName${i}`} className="block mt-1 text-sm font-medium leading-5 text-gray-700">
                    Feature Name
                  </label>
                  <input
                    id={`featureName${i}`}
                    type="text"
                    {...register(`keyFeatures[${i}].name`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <label htmlFor={`featureDescription${i}`} className="block mt-1 text-sm font-medium leading-5 text-gray-700">
                    Feature Description
                  </label>
                  <textarea
                    id={`featureDescription${i}`}
                    {...register(`keyFeatures[${i}].description`)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  contentType: string;
  targetAudience: string;
  keyFeatures: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<GatherRequirementsFormValues>();
  const router = useRouter();

  const onSubmit = (data: GatherRequirementsFormValues) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      router.push('/confirmation');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <label htmlFor="contentType" className="block text-sm font-medium leading-5 text-gray-700">
            Content Type
          </label>
          <input
            id="contentType"
            type="text"
            {...register('contentType', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <label htmlFor="targetAudience" className="block mt-4 text-sm font-medium leading-5 text-gray-700">
            Target Audience
          </label>
          <input
            id="targetAudience"
            type="text"
            {...register('targetAudience', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <div className="mt-4">
            <label htmlFor="keyFeatures" className="block text-sm font-medium leading-5 text-gray-700">
              Key Features
            </label>
            {formState?.errors.keyFeatures && (
              <p role="alert" aria-live="assertive" className="text-red-600 mt-1 block sm:inline-block">
                Please add at least one key feature.
              </p>
            )}
            <div id="keyFeatures">
              {Array.from({ length: 2 }, (_, i) => (
                <React.Fragment key={i}>
                  <label htmlFor={`featureName${i}`} className="block mt-1 text-sm font-medium leading-5 text-gray-700">
                    Feature Name
                  </label>
                  <input
                    id={`featureName${i}`}
                    type="text"
                    {...register(`keyFeatures[${i}].name`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <label htmlFor={`featureDescription${i}`} className="block mt-1 text-sm font-medium leading-5 text-gray-700">
                    Feature Description
                  </label>
                  <textarea
                    id={`featureDescription${i}`}
                    {...register(`keyFeatures[${i}].description`)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default GatherRequirements;