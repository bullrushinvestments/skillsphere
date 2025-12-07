import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleCreateSpecification = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<BusinessSpec>('/api/business-spec', { name: businessName, description });
      console.log('Business Specification Created:', response.data);
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingX: { xs: 2, md: 5 },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Business Specification
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="businessName"
          label="Business Name"
          name="businessName"
          autoComplete="business-name"
          autoFocus
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          aria-label="Enter business name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Enter description"
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          fullWidth
          onClick={handleCreateSpecification}
          disabled={!businessName || !description}
          sx={{ mt: 2 }}
        >
          Create Specification
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleCreateSpecification = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<BusinessSpec>('/api/business-spec', { name: businessName, description });
      console.log('Business Specification Created:', response.data);
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingX: { xs: 2, md: 5 },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Business Specification
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="businessName"
          label="Business Name"
          name="businessName"
          autoComplete="business-name"
          autoFocus
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          aria-label="Enter business name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Enter description"
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          fullWidth
          onClick={handleCreateSpecification}
          disabled={!businessName || !description}
          sx={{ mt: 2 }}
        >
          Create Specification
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;