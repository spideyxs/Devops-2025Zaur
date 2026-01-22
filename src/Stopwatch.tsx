import { useEffect, useRef, useState } from 'react';
import { Box, Button, Stack, Typography, Paper, List, ListItem, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RefreshIcon from '@mui/icons-material/Refresh';
import FlagIcon from '@mui/icons-material/Flag';
import SpeedIcon from '@mui/icons-material/Speed';

export const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [records, setRecords] = useState<number[]>([]);
  const [multiplier, setMultiplier] = useState(1);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000 / multiplier);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, multiplier]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);

  const handleReset = () => {
    setIsActive(false);
    setElapsed(0);
    setRecords([]);
    setMultiplier(1);
  };

  const handleRecord = () => {
    if (isActive) {
      setRecords(prev => [...prev, elapsed]);
    }
  };

  const increaseSpeed = () => {
    setMultiplier(prev => (prev < 2 ? prev * 2 : prev));
  };

  const decreaseSpeed = () => {
    setMultiplier(prev => (prev > 0.5 ? prev / 2 : prev));
  };

  const formatDisplay = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 6,
          backgroundColor: 'background.paper',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            color: 'primary.main',
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: 2,
          }}
        >
          {formatDisplay(elapsed)}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4 }}>
          <SpeedIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ×{multiplier}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          {!isActive ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrowIcon />}
              onClick={handleStart}
              size="large"
            >
              Старт
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<PauseIcon />}
              onClick={handlePause}
              size="large"
            >
              Пауза
            </Button>
          )}
          <Button
            variant="outlined"
            color="error"
            startIcon={<RefreshIcon />}
            onClick={handleReset}
            size="large"
          >
            Сброс
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            onClick={decreaseSpeed}
            disabled={multiplier <= 0.5}
            size="medium"
          >
            ×0.5
          </Button>
          <Button
            variant="outlined"
            onClick={increaseSpeed}
            disabled={multiplier >= 2}
            size="medium"
          >
            ×2
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FlagIcon />}
            onClick={handleRecord}
            disabled={!isActive}
            size="medium"
          >
            Круг
          </Button>
        </Stack>

        {records.length > 0 && (
          <Box sx={{ maxHeight: '40vh', overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Divider sx={{ mb: 2, width: '100%', maxWidth: 400 }} />
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', textAlign: 'center' }}>
              Круги
            </Typography>
            <List sx={{ overflow: 'hidden', width: '100%', maxWidth: 400 }}>
              {records.map((record, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    borderLeft: `3px solid ${idx % 2 === 0 ? 'primary.main' : 'secondary.main'}`,
                    mb: 1,
                    backgroundColor: 'rgba(211, 47, 47, 0.05)',
                    borderRadius: 1,
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: 'text.primary', textAlign: 'center' }}>
                    Круг {idx + 1}: {formatDisplay(record)}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Box>
  );
};
